import { httpClient } from "@/lib/axios";
import { ProductDetails } from "../types";

/**
 * Fetch product details by product ID
 * @param productId - The product ID (e.g., 4)
 * @returns Promise<ProductDetails>
 */
export const getProductDetails = async (
  productId: number
): Promise<ProductDetails> => {
  try {
    const response = await httpClient.get(`/products/${productId}`);
    return response.data as ProductDetails;
  } catch (error) {
    throw error;
  }
};
