import { Box, Button } from "@mui/material";
import ExploreHeader from "./explore-products-header";
import ProductsList from "../products/products-list";
import { Product } from "../../types";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useAllProducts } from "../../services/queries";
import { useNavigate } from "react-router-dom";

interface ExploreProductsProps {
  onAddToCart?: (id: string) => void;
  onToggleWishlist?: (product: Product) => void;
  onQuickView?: (id: string) => void;
}

export default function ExploreProducts({
  onAddToCart,
  onToggleWishlist,
  onQuickView,
}: ExploreProductsProps) {
  // ✅ Fetch data (just use the default)
  const { data: products, isLoading, isError } = useAllProducts();

  // ✅ Show only the first 4 products
  const exploreProducts = products?.slice(0, 4) || [];

  const navigate = useNavigate();

  return (
    <Box className="py-12">
      <ExploreHeader />

      {/* Navigation Arrows (optional — can be hooked later) */}
      <Box display="flex" justifyContent="flex-end" mb={3}>
        <div className="flex space-x-3">
          <button className="cat-prev h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400 transition">
            <KeyboardArrowLeft fontSize="small" />
          </button>
          <button className="cat-next h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400 transition">
            <KeyboardArrowRight fontSize="small" />
          </button>
        </div>
      </Box>

      {/* ✅ Product list handles loading skeletons */}
      <ProductsList
        isLoading={isLoading}
        products={isError ? [] : exploreProducts}
        onAddToCart={onAddToCart}
        onToggleWishlist={onToggleWishlist}
        onQuickView={onQuickView}
      />

      {/* View All Button */}
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
