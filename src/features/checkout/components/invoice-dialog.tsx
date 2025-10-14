import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
  Typography,
  Button,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useCartStore } from "../../cart/store";

interface InvoiceDialogProps {
  open: boolean;
  onClose: () => void;
  billingInfo: any | null;
  paymentMethod: string;
}

const InvoiceDialog: React.FC<InvoiceDialogProps> = ({
  open,
  onClose,
  billingInfo,
  paymentMethod,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { items, getTotalPrice } = useCartStore();
  const subtotal = getTotalPrice();
  const shipping = 5;
  const total = subtotal + shipping;

  const handlePrint = () => window.print();

  // 🛑 If no billing info, don’t render anything yet
  if (!billingInfo) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={isMobile}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle
        sx={{
          textAlign: "center",
          fontWeight: 700,
          color: "#DB4444",
          fontSize: "1.4rem",
          mt: 1,
        }}
      >
        E-Commerce Invoice
      </DialogTitle>

      <DialogContent sx={{ p: isMobile ? 2 : 4 }}>
        {/* Header */}
        <Box
          display="flex"
          justifyContent="space-between"
          flexWrap="wrap"
          mb={3}
        >
          {/* Billing Info */}
          <Box flex="1 1 45%" mb={2}>
            <Typography variant="h6" gutterBottom>
              Billing Information
            </Typography>
            <Typography variant="body2">
              <strong>Name:</strong> {billingInfo.firstName}
            </Typography>
            {billingInfo.companyName && (
              <Typography variant="body2">
                <strong>Company:</strong> {billingInfo.companyName}
              </Typography>
            )}
            <Typography variant="body2">
              <strong>Address:</strong> {billingInfo.streetAddress}
            </Typography>
            {billingInfo.apartment && (
              <Typography variant="body2">
                <strong>Apartment:</strong> {billingInfo.apartment}
              </Typography>
            )}
            <Typography variant="body2">
              <strong>City:</strong> {billingInfo.city}
            </Typography>
            <Typography variant="body2">
              <strong>Phone:</strong> {billingInfo.phone}
            </Typography>
            <Typography variant="body2">
              <strong>Email:</strong> {billingInfo.email}
            </Typography>
          </Box>

          {/* Payment Info */}
          <Box flex="1 1 45%" mb={2}>
            <Typography variant="h6" gutterBottom>
              Payment Information
            </Typography>
            <Typography variant="body2">
              <strong>Method:</strong> {paymentMethod}
            </Typography>
            <Typography variant="body2">
              <strong>Date:</strong>{" "}
              {new Date().toLocaleString(undefined, {
                dateStyle: "medium",
                timeStyle: "short",
              })}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {/* Product List */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Summary
          </Typography>

          <Box className="border border-gray-200 rounded-md overflow-hidden">
            <Box
              className="flex justify-between bg-gray-100 px-3 py-2 font-semibold"
              sx={{ color: "#333" }}
            >
              <Typography>Product</Typography>
              <Typography>Price</Typography>
            </Box>

            {items.map((item) => (
              <Box
                key={item.id}
                className="flex justify-between px-3 py-2 border-t border-gray-100"
              >
                <Typography variant="body2">{item.name}</Typography>
                <Typography variant="body2">
                  ${item.price.toFixed(2)}
                </Typography>
              </Box>
            ))}

            <Divider />

            <Box className="px-3 py-2 space-y-1">
              <Box className="flex justify-between">
                <Typography>Subtotal:</Typography>
                <Typography>${subtotal.toFixed(2)}</Typography>
              </Box>
              <Box className="flex justify-between">
                <Typography>Shipping:</Typography>
                <Typography>${shipping.toFixed(2)}</Typography>
              </Box>
              <Divider sx={{ my: 1 }} />
              <Box className="flex justify-between font-semibold text-red-600">
                <Typography>Total:</Typography>
                <Typography>${total.toFixed(2)}</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "center", pb: 2 }}>
        <Button variant="outlined" onClick={onClose}>
          Close
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={handlePrint}
          sx={{ ml: 2 }}
        >
          Print
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default InvoiceDialog;
