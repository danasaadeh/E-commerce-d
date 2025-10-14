import { Box, Button, Skeleton } from "@mui/material";
import FlashSalesHeader from "./flash-sales-header";
import { Product } from "../../types";
import { useAllProducts } from "../../services/queries";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "../products/prouct-card"; // ✅ fixed import
import { useNavigate } from "react-router-dom";

interface FlashSalesProps {
  onAddToCart?: (id: string) => void;
  onToggleWishlist?: (product: Product) => void;
  onQuickView?: (id: string) => void;
}

export default function FlashSales({
  onAddToCart,
  onToggleWishlist,
  onQuickView,
}: FlashSalesProps) {
  const { data: products, isLoading, isError } = useAllProducts();
  const flashSaleProducts = products?.slice(0, 10) || [];

  // 🦴 Create placeholder skeleton cards (4 visible at a time)
  const skeletons = Array.from({ length: 4 });
  const navigate = useNavigate();

  return (
    <Box className="py-12 relative">
      {/* Header with navigation buttons */}
      <FlashSalesHeader />

      {/* 🔥 Flash Sale Carousel */}
      <Box className="mt-6">
        {isLoading ? (
          <div className="flex gap-6 overflow-hidden justify-center">
            {skeletons.map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: 270,
                  height: 350,
                  borderRadius: 1,
                  boxShadow: "none",
                  border: "1px solid #f0f0f0",
                  p: 1.5,
                }}
              >
                <Skeleton variant="rectangular" height={200} />
                <Skeleton variant="text" sx={{ mt: 2, width: "80%" }} />
                <Skeleton variant="text" sx={{ width: "60%" }} />
                <Skeleton variant="text" sx={{ width: "40%" }} />
              </Box>
            ))}
          </div>
        ) : isError ? (
          <div className="text-center text-red-500 py-8">
            Failed to load products.
          </div>
        ) : (
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".flash-next",
              prevEl: ".flash-prev",
            }}
            spaceBetween={24}
            slidesPerView={4}
            breakpoints={{
              0: { slidesPerView: 1.2 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {flashSaleProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard
                  product={product}
                  onAddToCart={onAddToCart}
                  onToggleWishlist={onToggleWishlist}
                  onQuickView={onQuickView}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </Box>

      {/* View All Button */}
      <Box textAlign="center" mt={4}>
        <Button
          variant="contained"
          onClick={() => navigate(`/products`)}
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
