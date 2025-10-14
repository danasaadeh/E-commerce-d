import { useQuery } from "@tanstack/react-query";
import homeService from "../services/api";

/**
 * 🏠 Get all products
 */

export const useAllProducts = (offset = 0, limit = 10) =>
  useQuery({
    queryKey: ["home", "products", offset, limit],
    queryFn: () => homeService.getAllProducts(offset, limit),
    //keepPreviousData: true, // ✅ prevents flicker between pages
  });

/**
 * 🏷️ Get all categories
 */
export const useAllCategories = () =>
  useQuery({
    queryKey: ["home", "categories"],
    queryFn: homeService.getAllCategories,
  });

/**
 * 🧩 Get products by category slug
 */
export const useProductsByCategorySlug = (categorySlug: string) =>
  useQuery({
    queryKey: ["home", "products", "slug", categorySlug],
    queryFn: () => homeService.getProductsByCategorySlug(categorySlug),
    enabled: !!categorySlug,
  });

/**
 * 🔍 Filtered products — uses URL query params
 */
export const useFilteredProducts = (filters: Record<string, string>) =>
  useQuery({
    queryKey: ["home", "products", "filter", filters],
    queryFn: () => homeService.getFilteredProducts(filters),
    enabled: Object.keys(filters).length > 0,
  });

export const useSearchProducts = (query: string) =>
  useQuery({
    queryKey: ["home", "search", query],
    queryFn: () => homeService.searchProductsByTitle(query),
    enabled: !!query, // only runs when query is not empty
  });
