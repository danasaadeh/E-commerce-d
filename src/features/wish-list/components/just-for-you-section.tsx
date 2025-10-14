import { Box, Button } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import ProductsList from "@/features/home/components/products/products-list";
import CategoryHeader from "@/features/home/components/category-section/category-header";
import { useAllProducts } from "@/features/home/services/queries"; // ✅ Your custom query
import { Product } from "@/features/home/types";

interface JustForYouSectionProps {
  onAddToCart?: (id: string) => void;
  onToggleWishlist?: (product: Product) => void;
  onQuickView?: (id: string) => void;
}

export default function JustForYouSection({
  onAddToCart,
  onToggleWishlist,
  onQuickView,
}: JustForYouSectionProps) {
  const navigate = useNavigate();

  // ✅ Fetch from backend using your query
  const { data: products, isLoading, isError } = useAllProducts();

  return (
    <Box className="py-12">
      {/* 🧭 Section Header */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={3}
      >
        <CategoryHeader title="Just For You" color="#DB4444" />
      </Box>

      {/* 🔁 Optional Nav Arrows (same style as RelatedItems) */}
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
        products={isError ? [] : products?.slice(0, 4)}
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
