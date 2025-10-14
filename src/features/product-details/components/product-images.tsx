import type React from "react";

import { useState } from "react";
import { Box } from "@mui/material";

interface ProductImagesProps {
  images: string[];
}

const ProductImages: React.FC<ProductImagesProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <Box className="flex gap-5">
      {/* Thumbnails - Vertical on the left */}
      <Box className="flex flex-col gap-4">
        {images.map((img, index) => (
          <Box
            key={index}
            onClick={() => setSelectedImage(img)}
            className={`w-[110px] h-[110px] bg-gray-50 rounded border-2 cursor-pointer transition-all hover:border-blue-400 flex items-center justify-center overflow-hidden ${
              selectedImage === img ? "border-red-500" : "border-gray-200"
            }`}
          >
            <img
              src={img || "/placeholder.svg"}
              alt={`thumbnail ${index + 1}`}
              className="w-full h-full object-contain p-2"
            />
          </Box>
        ))}
      </Box>

      {/* Main Image - Large display with blue border when active */}
      <Box className="flex-1 bg-gray-50 rounded border-2 border-white flex items-center justify-center p-12">
        <img
          src={selectedImage || "/placeholder.svg"}
          alt="product"
          className="w-full h-auto max-h-[450px] object-contain"
        />
      </Box>
    </Box>
  );
};

export default ProductImages;
