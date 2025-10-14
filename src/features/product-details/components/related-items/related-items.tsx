import { Box, Button } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

import RelatedItemsHeader from "./related-items-header";
import ProductsList from "@/features/home/components/products/products-list";
import { useAllProducts } from "@/features/home/services/queries";
import { Product } from "@/features/home/types";
import { useNavigate } from "react-router-dom";

interface RelatedItemsProps {
  onAddToCart?: (id: string) => void;
  onToggleWishlist?: (product: Product) => void;
  onQuickView?: (id: string) => void;
  category?: string;
}

export default function RelatedItems({
  onAddToCart,
  onToggleWishlist,
  onQuickView,
  category,
}: RelatedItemsProps) {
  // ✅ Fetch products
  const { data: products, isLoading, isError } = useAllProducts();
  const navigate = useNavigate();

  // // ✅ Show only first 4 items (optionally filtered by category)
  // const relatedProducts =
  //   products
  //     ?.filter((p) =>
  //       category
  //         ? p.category?.toLowerCase() === category.toLowerCase()
  //         : true
  //     )
  //     ?.slice(0, 4) || [];

  return (
    <Box className="py-12">
      {/* 🧭 Section Header */}
      <RelatedItemsHeader />

      {/* 🔁 Navigation Arrows (optional, for consistency) */}
      <Box display="flex" justifyContent="flex-end" mb={3}>
        <div className="flex space-x-3">
          <button className="cat-prev h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-300 transition">
            <KeyboardArrowLeft fontSize="small" />
          </button>
          <button className="cat-next h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-300 transition">
            <KeyboardArrowRight fontSize="small" />
          </button>
        </div>
      </Box>

      {/* 🛍️ Product List */}
      <ProductsList
        isLoading={isLoading}
        products={isError ? [] : products?.slice(0, 3)}
        onAddToCart={onAddToCart}
        onToggleWishlist={onToggleWishlist}
        onQuickView={onQuickView}
      />

      {/* 🔗 View All Button */}
      <Box textAlign="center" mt={4}>
        <Button
          onClick={() => navigate(`/products`)}
          variant="contained"
          sx={{
            px: 6,
            py: 1.5,
            mt: 2,
            fontSize: 15,
            textTransform: "none",
            borderRadius: 1,
            bgcolor: "#DB4444",
            "&:hover": { bgcolor: "#DB4444" },
          }}
        >
          View All Products
        </Button>
      </Box>
    </Box>
  );
}
