import React, { useState } from "react";
import {
  Box,
  Container,
  Button,
  Snackbar,
  Alert,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme as useMuiTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import CartHeader from "./cart-header";
import CartItem from "./cart-item";
import CartTotal from "./cart-total";
import CouponCard from "./coupon-card";
import Breadcrumb from "./bread-crumb";
import { useCartStore } from "../store";
import { useIsLoggedIn } from "@/features/auth/hooks/is-logged-in";
import { appRoutes } from "@/routes";

const Cart = () => {
  const navigate = useNavigate();
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("md"));

  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } =
    useCartStore();
  const { isLoggedIn } = useIsLoggedIn();

  const subtotal = getTotalPrice();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // --- Logic Handlers ---
  const handleRemoveItem = (id: number) => removeFromCart(String(id));
  const handleUpdateQuantity = (id: number, quantity: number) =>
    updateQuantity(String(id), quantity);

  const handleUpdateCart = () => setSnackbarOpen(true);

  const handleReturnToShop = () => {
    clearCart();
    navigate(appRoutes.home);
  };

  const handleCheckout = () => {
    if (isLoggedIn) {
      navigate(appRoutes.checkout);
    } else {
      // 👇 Send user to login and remember that they came from the cart
      navigate(appRoutes.auth.login, { state: { from: appRoutes.cart } });
    }
  };

  const handleApplyCoupon = (code: string) => {
    console.log("Apply coupon:", code);
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        bgcolor: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: { xs: 4, md: 8 },
        px: { xs: 2, sm: 4, md: 6 },
      }}
    >
      {/* ✅ Breadcrumb */}
      <Box sx={{ width: "100%", maxWidth: "1300px", mx: "auto" }}>
        <Breadcrumb />
      </Box>

      {/* ✅ Empty Cart */}
      {items.length === 0 ? (
        <Box
          sx={{
            mt: 8,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 500 }}>
            Your cart is empty 🛒
          </Typography>
          <Typography sx={{ color: "text.secondary", mb: 3 }}>
            Browse our products and add items to your cart.
          </Typography>
          <Button
            variant="contained"
            color="error"
            onClick={handleReturnToShop}
            sx={{
              textTransform: "none",
              px: 4,
              py: 1.5,
              borderRadius: 1,
              bgcolor: "#DB4444",
              "&:hover": { bgcolor: "#c23b3b" },
            }}
          >
            Return to Shop
          </Button>
        </Box>
      ) : (
        <Container maxWidth="lg" sx={{ mt: 2 }}>
          {/* ✅ Cart Header */}
          <Box
            sx={{
              backgroundColor: "white",
              border: "1px solid #E5E7EB",
              borderRadius: "8px",
              boxShadow: "0px 2px 8px rgba(0,0,0,0.05)",
              p: { xs: 2, sm: 3, md: 1 },
              mb: 4,
            }}
          >
            <CartHeader />

            {/* ✅ Cart Items */}
            <Box>
              {items.map((item) => (
                <CartItem
                  key={item.id}
                  item={{
                    ...item,
                    id: Number(item.id),
                  }}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemove={handleRemoveItem}
                />
              ))}
            </Box>
          </Box>

          {/* ✅ Action Buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              mt: 2,
              mb: 4,
              gap: 2,
            }}
          >
            <Button
              variant="outlined"
              color="inherit"
              onClick={handleReturnToShop}
              sx={{
                textTransform: "none",
                borderColor: "#ddd",
                color: "#222",
                px: 4,
                py: 1,
                "&:hover": { borderColor: "#DB4444", color: "#DB4444" },
              }}
            >
              Return To Shop
            </Button>

            <Button
              variant="outlined"
              color="inherit"
              onClick={handleUpdateCart}
              disabled={items.length === 0}
              sx={{
                textTransform: "none",
                borderColor: "#ddd",
                color: "#222",
                px: 4,
                py: 1,
                "&:hover": { borderColor: "#DB4444", color: "#DB4444" },
              }}
            >
              Update Cart
            </Button>
          </Box>

          {/* ✅ Coupon + Cart Total Section */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 3, md: 4 },
              alignItems: "flex-start",
              justifyContent: "center",
              width: "100%",
              maxWidth: 1100,
              mx: "auto",
              mb: 6,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <CouponCard onApplyCoupon={handleApplyCoupon} />
            </Box>

            <Box sx={{ flex: 1, maxWidth: 400 }}>
              <CartTotal
                subtotal={subtotal}
                shipping="Free"
                total={subtotal}
                onCheckout={handleCheckout}
              />
            </Box>
          </Box>
        </Container>
      )}

      {/* ✅ Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Cart updated successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Cart;
