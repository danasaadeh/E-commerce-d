import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Rating,
  Button,
  Card,
  CardMedia,
  CardContent,
  Alert,
  Snackbar,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useNavigate } from "react-router-dom";
import { useWishlistStore } from "@/features/wish-list/store";
import { useCartStore } from "@/features/cart/store";
import { Product } from "../../types";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (id: string) => void;
  onToggleWishlist?: (product: Product) => void;
  onQuickView?: (id: string) => void;
  wishlistMode?: boolean;
}

export default function ProductCard({
  product,
  onAddToCart,
  onToggleWishlist,
  onQuickView,
  wishlistMode = false,
}: ProductCardProps) {
  const {
    id,
    name,
    price,
    originalPrice,
    image,
    rating,
    reviewCount,
    badge,
    colors,
  } = product;

  const [selectedColor, setSelectedColor] = useState(colors?.[0]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const { wishlist } = useWishlistStore();
  const addToCart = useCartStore((state) => state.addToCart);
  const isWishlisted = wishlist.some((item) => item.id === id);
  const navigate = useNavigate();

  const discountPercentage = originalPrice
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    addToCart({ id, name, price, image, quantity: 1 });
    onAddToCart?.(id);
    setSnackbarOpen(true);
  };

  const handleWishlistClick = () => onToggleWishlist?.(product);
  const handleQuickView = () => {
    onQuickView?.(id);
    navigate(`/product/${id}`);
  };

  return (
    <>
      <Card
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          width: 280,
          height: 350,
          borderRadius: 2,
          overflow: "hidden",
          position: "relative",
          bgcolor: "white",
          mt: 2,
          boxShadow: "none",
          border: "none",
          outline: "none",
          transition: "all 0.3s ease",
        }}
      >
        {/* 🏷️ Discount / New Badges */}
        {(badge || discountPercentage > 0) && (
          <Box
            sx={{
              position: "absolute",
              top: 15,
              left: 15,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              zIndex: 2,
            }}
          >
            {discountPercentage > 0 && (
              <Box
                sx={{
                  bgcolor: "#cc0000",
                  color: "#fff",
                  px: 1.2,
                  py: 0.3,
                  borderRadius: 1,
                  fontSize: 14,
                }}
              >
                -{discountPercentage}%
              </Box>
            )}
            {badge?.text === "New" && (
              <Box
                sx={{
                  bgcolor: "#1e88e5",
                  color: "#fff",
                  px: 1.2,
                  py: 0.3,
                  borderRadius: 1,
                  fontSize: 14,
                }}
              >
                New
              </Box>
            )}
          </Box>
        )}

        {/* ❤️ 👁 or 🗑 */}
        <Box
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            display: "flex",
            flexDirection: "column",
            gap: 1,
            zIndex: 2,
          }}
        >
          {wishlistMode ? (
            <IconButton
              onClick={() => onToggleWishlist?.(product)}
              sx={{
                bgcolor: "white",
                "&:hover": { bgcolor: "white", color: "#cc0000" },
                width: 42,
                height: 42,
                color: "#cc0000",
              }}
            >
              <DeleteOutlineIcon fontSize="medium" />
            </IconButton>
          ) : (
            <>
              <IconButton
                onClick={handleWishlistClick}
                sx={{
                  bgcolor: "white",
                  "&:hover": { bgcolor: "#cc0000", color: "white" },
                  width: 42,
                  height: 42,
                  color: isWishlisted ? "#cc0000" : "black",
                  transition: "all 0.3s ease",
                }}
              >
                {isWishlisted ? (
                  <FavoriteIcon fontSize="medium" />
                ) : (
                  <FavoriteBorderIcon fontSize="medium" />
                )}
              </IconButton>

              <IconButton
                onClick={handleQuickView}
                sx={{
                  bgcolor: "white",
                  "&:hover": { bgcolor: "#cc0000", color: "white" },
                  width: 42,
                  height: 42,
                }}
              >
                <VisibilityOutlinedIcon fontSize="medium" />
              </IconButton>
            </>
          )}
        </Box>

        {/* 🖼️ Product Image + Hidden Add to Cart until hover */}
        <Box
          sx={{
            bgcolor: "#f5f5f5",
            p: 2,
            textAlign: "center",
            position: "relative",
            height: 180,
          }}
        >
          <CardMedia
            component="img"
            height="180"
            image={image || "/placeholder.svg"}
            alt={name}
            sx={{
              objectFit: "contain",
              mx: "auto",
              height: 160,
              transition: "transform 0.3s ease",
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          />

          {/* 🛒 Add to Cart button only on hover */}
          <Box
            sx={{
              position: "absolute",
              bottom: isHovered ? 0 : "-100%",
              left: 0,
              width: "100%",
              bgcolor: "black",
              color: "#fff",
              py: 1,
              textAlign: "center",
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.4s ease",
            }}
          >
            <Button
              fullWidth
              startIcon={<ShoppingCartOutlinedIcon />}
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart();
              }}
              sx={{
                bgcolor: "black",
                color: "white",
                fontSize: 16,
                fontWeight: 500,
                textTransform: "none",
                "&:hover": { bgcolor: "#222" },
              }}
            >
              Add To Cart
            </Button>
          </Box>
        </Box>

        {/* 📝 Info */}
        <CardContent
          sx={{ bgcolor: "white", color: "black", textAlign: "left" }}
        >
          <Typography sx={{ fontSize: 16, fontWeight: 600, mb: 1 }} noWrap>
            {name}
          </Typography>

          {/* 💰 Price + ⭐ Rating */}
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <Typography
              sx={{ fontSize: 16, color: "#cc0000", fontWeight: 600 }}
            >
              ${price}
            </Typography>
            {originalPrice && (
              <Typography
                sx={{
                  fontSize: 14,
                  color: "gray",
                  textDecoration: "line-through",
                }}
              >
                ${originalPrice}
              </Typography>
            )}
            <Box display="flex" alignItems="center" gap={0.5} ml="auto">
              <Rating value={rating} precision={0.5} readOnly size="small" />
              <Typography sx={{ fontSize: 14, color: "gray" }}>
                ({reviewCount})
              </Typography>
            </Box>
          </Box>

          {/* 🎨 Colors */}
          {colors && colors.length > 0 && (
            <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
              {colors.map((color, i) => (
                <Box
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedColor(color);
                  }}
                  sx={{
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    bgcolor: color,
                    cursor: "pointer",
                    border:
                      selectedColor === color
                        ? "2px solid black"
                        : "1px solid #ddd",
                    transform:
                      selectedColor === color ? "scale(1.1)" : "scale(1)",
                    transition: "all 0.2s ease",
                  }}
                />
              ))}
            </Box>
          )}
        </CardContent>
      </Card>

      {/* ✅ Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2500}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          {name} added to cart!
        </Alert>
      </Snackbar>
    </>
  );
}
