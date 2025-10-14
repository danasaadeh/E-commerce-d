import { Box, Typography, TextField, Button } from "@mui/material";
import { useFormContext } from "react-hook-form";
import ProductItem from "./product-item";
import PaymentMethod from "./paymnet-method";
import { useCartStore } from "../../cart/store/index"; // ✅ import Zustand store

const OrderTotal = () => {
  const { register, getValues } = useFormContext();

  // ✅ Get cart items and total from Zustand
  const { items, getTotalPrice } = useCartStore();
  const subtotal = getTotalPrice();

  // ✅ Handle coupon manually (no Yup validation)
  const handleApplyCoupon = () => {
    const code = getValues("couponCode");

    if (!code) {
      alert("Please enter a coupon code before applying.");
      return;
    }

    const pattern = /^[A-Za-z0-9-]{3,20}$/;
    if (!pattern.test(code)) {
      alert("Invalid coupon code. Must be 3–20 alphanumeric characters.");
      return;
    }

    console.log("✅ Coupon applied:", code);
    alert(`Coupon "${code}" applied successfully!`);
  };

  return (
    <Box className="w-full">
      {/* ✅ Product List */}
      {items.length > 0 ? (
        items.map((p) => (
          <ProductItem
            key={p.id}
            image={p.image ?? "src/assets/images/placeholder.png"} // ✅ fallback
            name={p.name}
            price={p.price * p.quantity}
          />
        ))
      ) : (
        <Typography className="text-gray-500 text-center py-6">
          Your cart is empty.
        </Typography>
      )}

      {/* ✅ Totals */}
      <Box className="py-6 border-t border-gray-200 space-y-4">
        <Box className="flex justify-between">
          <Typography>Subtotal:</Typography>
          <Typography>${subtotal.toFixed(2)}</Typography>
        </Box>
        <Box className="flex justify-between pt-2">
          <Typography>Total:</Typography>
          <Typography className="font-semibold text-lg">
            ${subtotal.toFixed(2)}
          </Typography>
        </Box>
      </Box>

      {/* ✅ Payment Method */}
      <PaymentMethod />

      {/* ✅ Coupon Code Section */}
      <Box className="flex gap-4 py-6 items-start">
        <TextField
          fullWidth
          placeholder="Coupon Code (optional)"
          {...register("couponCode")}
        />
        <Button
          type="button"
          variant="contained"
          color="error"
          onClick={handleApplyCoupon}
          className="!capitalize !px-8 whitespace-nowrap"
        >
          Apply Coupon
        </Button>
      </Box>

      {/* ✅ Place Order */}
      <Button
        type="submit"
        variant="contained"
        color="error"
        fullWidth
        className="!capitalize !py-3"
      >
        Place Order
      </Button>
    </Box>
  );
};

export default OrderTotal;
