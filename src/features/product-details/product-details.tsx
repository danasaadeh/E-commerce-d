"use client";

import { Container, Box, CircularProgress, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import ProductBreadcrumb from "./components/product-breadcrumb";
import ProductDeliveryInfo from "./components/product-delivery-info";
import ProductImages from "./components/product-images";
import ProductInfo from "./components/product-info";
import RelatedItems from "./components/related-items/related-items";

import { useProductDetails } from "@/features/product-details/services/queries";
import type { Product } from "@/features/home/types";

interface ProductDisplay extends Product {
  inStock: boolean;
  description: string;
  colors: string[];
  sizes: string[];
  images: string[];
  category: string;
  reviews: number; // ✅ Added for UI consistency
}

const ProductDetails = () => {
  const params = useParams();
  const productId = Number(params?.id);

  const { data: product, isLoading, isError } = useProductDetails(productId);

  // ⏳ Loading
  if (isLoading) {
    return (
      <Box className="flex justify-center items-center h-[70vh]">
        <CircularProgress />
      </Box>
    );
  }

  // ❌ Error or Not Found
  if (isError || !product) {
    return (
      <Box className="flex justify-center items-center h-[70vh]">
        <Typography variant="h6" color="error">
          Failed to load product details.
        </Typography>
      </Box>
    );
  }

  // ✅ Build product object in UI-friendly format
  const mappedProduct = {
    id: product.id?.toString() ?? "0",
    name: product.title ?? "Unknown Product",
    price: product.price ?? 0,
    rating: 4.5, // or product.rating if API provides
    reviewCount: 25, // if your API doesn’t provide this, keep it fixed for now
    reviews: 25, // for ProductInfo
    inStock: true,
    description: product.description ?? "No description available.",
    colors: ["#000", "#d32f2f"],
    sizes: ["XS", "S", "M", "L", "XL"],
    image: product.images?.[0] ?? "/placeholder.png",
    images: product.images ?? ["/placeholder.png"],
    category: product.category?.name ?? "Other",
  };

  return (
    <Container maxWidth="lg" className="py-8">
      <ProductBreadcrumb />

      <div className="flex flex-col lg:flex-row gap-6 mt-8">
        {/* 🖼️ Product Images */}
        <div className="lg:w-[55%] w-full">
          <ProductImages images={mappedProduct.images} />
        </div>

        {/* 🧾 Product Info */}
        <div className="flex-1">
          <ProductInfo product={mappedProduct} />
          <ProductDeliveryInfo />
        </div>
      </div>

      {/* 🛍️ Related Items */}
      <RelatedItems category={mappedProduct.category} />
    </Container>
  );
};

export default ProductDetails;
