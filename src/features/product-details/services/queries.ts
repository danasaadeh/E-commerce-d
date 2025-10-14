import { useQuery } from "@tanstack/react-query";
import { getProductDetails } from "../services/api";

/**
 * Fetch product details by ID using React Query
 * @param productId - The product ID (number)
 */
export const useProductDetails = (productId: number) =>
  useQuery({
    queryKey: ["products", productId],
    queryFn: () => getProductDetails(productId),
    enabled: !!productId, // Only run when ID is valid
  });
