import React from "react";
import {
  Box,
  useMediaQuery,
  useTheme as useMuiTheme,
  Skeleton,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

import CategoryCard from "./category-card";
import CategoryHeader from "./category-header";
import { useAllCategories } from "@/features/home/services/queries";

// 🖼️ Local category icons
import CategoryCamera from "@/assets/icons/categories/Category-Camera .svg";
import CategoryCellPhone from "@/assets/icons/categories/Category-CellPhone.svg";
import CategoryComputer from "@/assets/icons/categories/Category-Computer.svg";
import CategoryGamepad from "@/assets/icons/categories/Category-Gamepad.svg";
import CategoryWatch from "@/assets/icons/categories/Category-SmartWatch.svg";
import CategoryHeadphone from "@/assets/icons/categories/Category-Headphone.svg";
import CategoryShoes from "@/assets/icons/categories/shoes.svg";
import CategoryFurniture from "@/assets/icons/categories/furniture.svg";
import CategoryClothes from "@/assets/icons/categories/clothes.svg";

// 🔗 Map backend category names to local SVG icons
const categoryIconMap: Record<string, string> = {
  Phones: CategoryCellPhone,
  Smartphones: CategoryCellPhone,
  Computers: CategoryComputer,
  Laptops: CategoryComputer,
  Smartwatch: CategoryWatch,
  Watches: CategoryWatch,
  Camera: CategoryCamera,
  Headphones: CategoryHeadphone,
  Audio: CategoryHeadphone,
  Gaming: CategoryGamepad,
  Shoes: CategoryShoes,
  Furniture: CategoryFurniture,
  Clothes: CategoryClothes,
};

const CategoriesSection: React.FC = () => {
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));
  const { data: categories, isLoading, isError } = useAllCategories();

  // 🌀 Loading skeletons
  if (isLoading) {
    return (
      <Box className="flex justify-center items-center gap-4 py-10">
        {[...Array(6)].map((_, i) => (
          <Skeleton
            key={i}
            variant="rectangular"
            width={120}
            height={120}
            sx={{ borderRadius: 2 }}
          />
        ))}
      </Box>
    );
  }

  // 🚨 Error or empty
  if (isError || !categories?.length) {
    return (
      <Box className="flex justify-center items-center py-10">
        <p className="text-gray-500">No categories found.</p>
      </Box>
    );
  }

  // 🧩 Render categories
  return (
    <Box sx={{ mt: 8, px: isMobile ? 2 : 8 }}>
      {/* Section Header */}
      <CategoryHeader
        color="#DB4444"
        title="Categories"
        subtitle="Browse By Category"
      />

      {/* Navigation Arrows */}
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

      {/* Category Carousel */}
      <Swiper
        spaceBetween={0}
        slidesPerView={5}
        navigation={{ nextEl: ".cat-next", prevEl: ".cat-prev" }}
        modules={[Navigation]}
        breakpoints={{
          1200: { slidesPerView: 6 },
          900: { slidesPerView: 4.2 },
          600: { slidesPerView: 3.2 },
          0: { slidesPerView: 1.5 },
        }}
      >
        {categories.map((cat) => {
          const icon = categoryIconMap[cat.name] || CategoryGamepad;

          return (
            <SwiperSlide key={cat.id}>
              {/* ✅ Pass slug prop here */}
              <CategoryCard
                icon={icon}
                label={cat.name}
                slug={cat.slug} // ✅ now CategoryCard can navigate correctly
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default CategoriesSection;
