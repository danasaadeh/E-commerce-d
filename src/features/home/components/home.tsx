import { Box } from "@mui/material";
import CategorySidebar from "./category-sidebar";
import HeroSlider from "./hero-sections/hero-slider";
import FlashSales from "./flash-sales/flash-sales";
import CategoriesSection from "./category-section/category";
import SectionDivider from "@/shared/components/divider/section-divider";
import HeroBannerTwo from "./hero-sections/hero-banner-two";
import NewArrival from "./new-arrival/new-arrival";
import BestSelling from "./best-selling-section/best-selling";
import ExploreProducts from "./explore-products/explore-products";
import FeaturesSection from "@/features/about/components/features-section";

import type { Product } from "@/features/home/types";
import { useWishlistStore } from "@/features/wish-list/store";
import BackToTopButton from "@/shared/components/back-to-top";

export default function Home() {
  const { toggleWishlist } = useWishlistStore();

  // 🛒 Add to cart (for demo)
  const handleAddToCart = (id: string) => {
    console.log(`Added to cart: ${id}`);
  };

  // ❤️ Toggle wishlist
  const handleToggleWishlist = (product: Product) => {
    toggleWishlist(product);
  };

  // 👁 Quick view
  const handleQuickView = (id: string) => {
    console.log(`Quick view: ${id}`);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
      <Box className="grid grid-cols-1 lg:grid-cols-12 gap-6 pb-12 border-b border-gray-300">
        {/* 🧭 Category Sidebar (now always rendered) */}
        <Box className="col-span-12 lg:col-span-3">
          <CategorySidebar />
        </Box>

        {/* 🎠 Hero Slider */}
        <Box className="col-span-12 lg:col-span-9">
          <HeroSlider />
        </Box>
      </Box>

      {/* ⚡ FLASH SALES */}
      <FlashSales
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        onQuickView={handleQuickView}
      />

      <SectionDivider />

      {/* 🏷️ Categories */}
      <CategoriesSection />

      <SectionDivider />

      {/* 🛍️ Best Selling */}
      <BestSelling
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        onQuickView={handleQuickView}
      />

      {/* 🖼️ Banner */}
      <HeroBannerTwo />

      {/* 🧩 Explore & New Arrivals */}
      <ExploreProducts
        onAddToCart={handleAddToCart}
        onToggleWishlist={handleToggleWishlist}
        onQuickView={handleQuickView}
      />
      <NewArrival />

      {/* ⭐ Features */}
      <FeaturesSection />
      <BackToTopButton />
    </main>
  );
}
