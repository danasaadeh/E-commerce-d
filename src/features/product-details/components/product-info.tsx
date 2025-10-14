import type React from "react";
import { Box, Typography, Rating, Chip, Divider } from "@mui/material";
import ProductActions from "./product-actions";
import type { Product as BaseProduct } from "@/features/home/types"; // ✅ import shared Product type

// Extend your shared Product type with additional UI fields
export interface ProductInfoType extends BaseProduct {
  inStock: boolean;
  description: string;
  colors: string[];
  sizes: string[];
  reviews: number;
}

interface ProductInfoProps {
  product: ProductInfoType;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <Box className="space-y-5">
      <Typography variant="h4" className="font-semibold text-gray-900">
        {product.name}
      </Typography>

      <Box className="flex items-center gap-3">
        <Rating value={product.rating} precision={0.5} readOnly size="small" />
        <Typography variant="body2" className="text-gray-500">
          ({product.reviews} Reviews)
        </Typography>
        <Box className="w-px h-4 bg-gray-300" />
        <Chip
          label={product.inStock ? "In Stock" : "Out of Stock"}
          color={product.inStock ? "success" : "default"}
          size="small"
          className="font-medium"
        />
      </Box>

      <Typography variant="h5" className="text-gray-900 font-semibold">
        ${product.price.toFixed(2)}
      </Typography>

      <Typography variant="body2" className="text-gray-700 leading-relaxed">
        {product.description}
      </Typography>

      <Divider className="!my-5" />

      {/* ✅ Pass full product down */}
      <ProductActions
        product={product}
        colors={product.colors}
        sizes={product.sizes}
      />
    </Box>
  );
};

export default ProductInfo;
