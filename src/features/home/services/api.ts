import {
  ProductDetails,
  ProductCategory,
} from "@/features/product-details/types";
import { httpClient } from "@/lib/axios";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  badge?: {
    text: string;
    type: "sale" | "new";
  };
  colors?: string[];
}

/**
 * Helper function to transform backend response into Product UI model
 */
const mapProductToUI = (product: ProductDetails): Product => {
  return {
    id: String(product.id),
    name: product.title,
    price: product.price,
    originalPrice: product.price + Math.floor(Math.random() * 100), // static bump
    image: product.images?.[0] || "https://placehold.co/600x400",
    rating: 4 + Math.floor(Math.random() * 2), // random 4–5
    reviewCount: Math.floor(Math.random() * 100), // static placeholder
    badge:
      Math.random() > 0.5
        ? { text: "Sale", type: "sale" }
        : { text: "NEW", type: "new" },
    colors: ["#111827", "#2563EB", "#F59E0B"], // fixed colors
  };
};

/**
 * Get all products
 */
/**
 * Get paginated products
 */
export const getAllProducts = async (
  offset = 0,
  limit = 10
): Promise<Product[]> => {
  const { data } = await httpClient.get<ProductDetails[]>(
    `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`
  );
  return data.map(mapProductToUI);
};

/**
 * Get all categories
 */
export const getAllCategories = async (): Promise<ProductCategory[]> => {
  const { data } = await httpClient.get<ProductCategory[]>(
    "https://api.escuelajs.co/api/v1/categories"
  );
  return data;
};

/**
 * Get all products by category ID
 */
export const getProductsByCategory = async (
  categoryId: number
): Promise<Product[]> => {
  const { data } = await httpClient.get<ProductDetails[]>(
    `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`
  );
  return data.map(mapProductToUI);
};
/**
 * Search products by title
 */
export const searchProductsByTitle = async (
  query: string
): Promise<Product[]> => {
  const { data } = await httpClient.get<ProductDetails[]>(
    `https://api.escuelajs.co/api/v1/products/?title=${encodeURIComponent(
      query
    )}`
  );
  return data.map(mapProductToUI);
};
/**
 * Get products by category slug
 */
export const getProductsByCategorySlug = async (
  categorySlug: string
): Promise<Product[]> => {
  const { data } = await httpClient.get<ProductDetails[]>(
    `https://api.escuelajs.co/api/v1/products/?categorySlug=${encodeURIComponent(
      categorySlug
    )}`
  );
  return data.map(mapProductToUI);
};
/**
 * Get products with dynamic filters
 * e.g. /products?categorySlug=clothes&price_min=50
 */
export const getFilteredProducts = async (
  filters: Record<string, string>
): Promise<Product[]> => {
  const queryString = new URLSearchParams(filters).toString();
  const { data } = await httpClient.get<ProductDetails[]>(
    `https://api.escuelajs.co/api/v1/products?${queryString}`
  );
  return data.map(mapProductToUI);
};

export default {
  getAllProducts,
  getAllCategories,
  getProductsByCategory,
  getProductsByCategorySlug,
  getFilteredProducts, // ✅ added
  searchProductsByTitle,
};
