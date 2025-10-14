import type React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { Box, Typography } from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";
import "swiper/css";
import "swiper/css/pagination";
import Iphone from "@/assets/images/home/hero-sections/iphone_hero.jpg";
import apple from "@/assets/images/home/apple.png";

const slides = [
  {
    id: 1,
    title: "iPhone 14 Series",
    subtitle: "Up to 10% off Voucher",
    bgColor: "bg-black",
    imgSrc: Iphone,
  },
  {
    id: 2,
    title: "iPhone 14 Pro Max",
    subtitle: "Up to 15% off Voucher",
    bgColor: "bg-black",
    imgSrc: Iphone,
  },
  {
    id: 3,
    title: "iPhone 14 Plus",
    subtitle: "Up to 12% off Voucher",
    bgColor: "bg-black",
    imgSrc: Iphone,
  },
  {
    id: 4,
    title: "iPhone 14 Plus",
    subtitle: "Up to 20% off Voucher",
    bgColor: "bg-black",
    imgSrc: Iphone,
  },
  {
    id: 3,
    title: "iPhone 14 Plus",
    subtitle: "Up to 25% off Voucher",
    bgColor: "bg-black",
    imgSrc: Iphone,
  },
];

const HeroSlider: React.FC = () => {
  return (
    <Box className="w-full h-[340px] lg:h-[400px] relative">
      <style>{`
        .hero-slider .swiper-pagination {
          bottom: 16px !important;
        }
        .hero-slider .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #9CA3AF;
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        .hero-slider .swiper-pagination-bullet-active {
          background: #DB4444;
          opacity: 1;
          width: 12px;
          height: 12px;
        }
      `}</style>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
        }}
        className="w-full h-full hero-slider"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Box
              className={`flex items-center justify-between px-8 md:px-16 h-full ${slide.bgColor} text-white`}
            >
              {/* Left Content */}
              <Box className="flex flex-col space-y-5 max-w-[45%] z-10">
                <Typography
                  variant="subtitle1"
                  className="text-gray-300 flex items-center gap-2"
                  sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
                >
                  <img src={apple} alt="Apple" className="h-8 w-8" />
                  {slide.title}
                </Typography>
                <Typography
                  variant="h2"
                  className="font-semibold leading-tight"
                  sx={{
                    fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                    lineHeight: 1.2,
                  }}
                >
                  {slide.subtitle}
                </Typography>

                <a
                  href="#"
                  className="flex items-center gap-2 text-white border-b-2 border-white w-fit pb-1 hover:text-gray-300 transition-colors"
                >
                  <Typography
                    variant="body1"
                    className="font-medium text-sm md:text-base"
                  >
                    Shop Now
                  </Typography>
                  <ArrowRightAlt fontSize="small" />
                </a>
              </Box>

              {/* Right Image */}
              <Box className="flex-shrink-0 h-full flex items-center justify-center max-w-[50%]">
                <img
                  src={slide.imgSrc || Iphone || "/placeholder.svg"}
                  alt={slide.title}
                  className="object-contain w-full h-full max-h-[280px] lg:max-h-[350px]"
                />
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default HeroSlider;
