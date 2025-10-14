import type React from "react";
import { Box, Typography, Button } from "@mui/material";

interface CartTotalProps {
  subtotal: number;
  shipping: string;
  total: number;
  onCheckout?: () => void;
}

const CartTotal: React.FC<CartTotalProps> = ({
  subtotal,
  shipping,
  total,
  onCheckout,
}) => {
  return (
    <Box
      className="border-2 border-gray-900 rounded-md bg-white"
      sx={{
        p: { xs: 4, md: 6, lg: 8 },
      }}
    >
      <Typography
        variant="h6"
        className="font-medium text-gray-900"
        sx={{
          mb: { xs: 3, md: 4, lg: 6 },
          fontSize: { xs: "1rem", md: "1.125rem", lg: "1.25rem" },
        }}
      >
        Cart Total
      </Typography>

      <Box className="space-y-4">
        <Box className="flex justify-between items-center pb-4 border-b border-gray-200">
          <Typography
            variant="body2"
            className="text-gray-900"
            sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
          >
            Subtotal:
          </Typography>
          <Typography
            variant="body2"
            className="text-gray-900"
            sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
          >
            ${subtotal}
          </Typography>
        </Box>

        <Box className="flex justify-between items-center pb-4 border-b border-gray-200">
          <Typography
            variant="body2"
            className="text-gray-900"
            sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
          >
            Shipping:
          </Typography>
          <Typography
            variant="body2"
            className="text-gray-900"
            sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
          >
            {shipping}
          </Typography>
        </Box>

        <Box className="flex justify-between items-center pt-2">
          <Typography
            variant="body2"
            className="text-gray-900"
            sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
          >
            Total:
          </Typography>
          <Typography
            variant="body2"
            className="font-medium text-gray-900"
            sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
          >
            ${total}
          </Typography>
        </Box>
      </Box>

      <Button
        variant="contained"
        color="error"
        fullWidth
        onClick={onCheckout}
        className="!capitalize !font-medium"
        sx={{
          mt: { xs: 2, md: 2 },
          py: { xs: 1, md: 1, lg: 2 },
          fontSize: { xs: "0.875rem", md: "1rem" },
        }}
      >
        Proceed to Checkout
      </Button>
    </Box>
  );
};

export default CartTotal;
