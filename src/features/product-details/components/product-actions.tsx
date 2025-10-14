import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { useWishlistStore } from "@/features/wish-list/store";
import { useCartStore } from "@/features/cart/store";
import type { Product } from "@/features/home/types";
import { ProductInfoType } from "./product-info";
interface ProductActionsProps {
  product?: ProductInfoType;
  colors: string[];
  sizes: string[];
}

const ProductActions: React.FC<ProductActionsProps> = ({
  product,
  colors,
  sizes,
}) => {
  if (!product) {
    return <Typography color="error">Product not found</Typography>;
  }

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(sizes?.[0] || "M");
  const [selectedColor, setSelectedColor] = useState(colors?.[0] || "#000");
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const { wishlist, toggleWishlist } = useWishlistStore();
  const addToCart = useCartStore((state) => state.addToCart);
  const navigate = useNavigate();

  const productId = String(product.id);
  const isWishlisted = wishlist?.some((item) => item.id === productId);

  const handleBuyNow = () => {
    addToCart({
      id: productId,
      name: product.name,
      price: product.price,
      image: product.image ?? "",
      quantity,
    });
    setSnackbarOpen(true);
    setTimeout(() => navigate("/cart"), 800);
  };

  const handleWishlistClick = () => {
    toggleWishlist({
      ...product,
      id: productId,
      rating: product.rating ?? 0,
      reviewCount: product.reviewCount ?? 0,
    });
  };

  return (
    <Box className="space-y-5">
      {/* 🎨 Colors */}
      <Box>
        <Typography variant="body1" className="font-medium text-gray-900 mb-3">
          Colours:
        </Typography>
        <Box className="flex items-center gap-2">
          {colors.map((color, index) => (
            <Box
              key={index}
              onClick={() => setSelectedColor(color)}
              className={`w-8 h-8 rounded-full cursor-pointer border-2 transition-all hover:scale-110 ${
                selectedColor === color
                  ? "border-[#DB4444] ring-2 ring-offset-2 ring-[#DB4444]"
                  : "border-gray-300"
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </Box>
      </Box>

      {/* 📏 Sizes */}
      <Box>
        <Typography variant="body1" className="font-medium text-gray-900 mb-3">
          Size:
        </Typography>
        <Box className="flex gap-3 flex-wrap">
          {sizes.map((size) => (
            <Button
              key={size}
              onClick={() => setSelectedSize(size)}
              variant={selectedSize === size ? "contained" : "outlined"}
              sx={{
                minWidth: 50,
                height: 40,
                fontWeight: 500,
                borderColor: selectedSize === size ? "#DB4444" : "#ccc",
                bgcolor: selectedSize === size ? "#DB4444" : "transparent",
                color: selectedSize === size ? "white" : "#333",
                "&:hover": {
                  bgcolor: selectedSize === size ? "#c63a3a" : "#f5f5f5",
                  borderColor: "#DB4444",
                },
              }}
            >
              {size}
            </Button>
          ))}
        </Box>
      </Box>

      {/* ➕ Quantity + 🛒 Actions */}
      <Box className="flex items-center gap-4 flex-wrap">
        <Box className="flex items-center border-2 border-gray-300 rounded-md overflow-hidden">
          <IconButton
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            disabled={quantity <= 1}
            sx={{ borderRadius: 0, "&:hover": { bgcolor: "#f5f5f5" } }}
          >
            <RemoveIcon fontSize="small" />
          </IconButton>
          <Typography className="px-6 py-1 font-medium min-w-[50px] text-center border-x-2 border-gray-300">
            {quantity}
          </Typography>
          <IconButton
            onClick={() => setQuantity(quantity + 1)}
            sx={{
              borderRadius: 0,
              bgcolor: "#DB4444",
              color: "white",
              "&:hover": { bgcolor: "#c63a3a" },
            }}
          >
            <AddIcon fontSize="small" />
          </IconButton>
        </Box>

        <Button
          variant="contained"
          size="large"
          onClick={handleBuyNow}
          sx={{
            textTransform: "capitalize",
            px: 5,
            py: 1.2,
            fontWeight: 600,
            bgcolor: "#DB4444",
            "&:hover": { bgcolor: "#c63a3a" },
            borderRadius: "8px",
          }}
        >
          Buy Now
        </Button>

        <IconButton
          onClick={handleWishlistClick}
          sx={{
            border: "2px solid",
            borderColor: isWishlisted ? "#DB4444" : "#ccc",
            color: isWishlisted ? "#DB4444" : "#333",
            borderRadius: "8px",
            "&:hover": {
              borderColor: "#DB4444",
              bgcolor: "#ffecec",
            },
          }}
        >
          {isWishlisted ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </Box>

      {/* ✅ Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2500}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity="success"
          onClose={() => setSnackbarOpen(false)}
          sx={{ width: "100%" }}
        >
          {product.name} added to cart!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ProductActions;
