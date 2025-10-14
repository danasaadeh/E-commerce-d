import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { couponSchema } from "../../checkout/config/index"; // ✅ use the new schema
import { InferType } from "yup";

interface CouponCardProps {
  onApplyCoupon?: (code: string) => void; // ✅ simplified
}

// ✅ Infer type directly from couponSchema
type CouponFormData = InferType<typeof couponSchema>;

const CouponCard: React.FC<CouponCardProps> = ({ onApplyCoupon }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CouponFormData>({
    resolver: yupResolver(couponSchema) as any,
    defaultValues: { couponCode: "" },
  });

  const onSubmit = (data: CouponFormData) => {
    if (onApplyCoupon) {
      onApplyCoupon(data.couponCode);
    }
    reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col sm:flex-row items-stretch sm:items-center"
      sx={{
        gap: { xs: 2, md: 4 },
        width: "100%",
      }}
    >
      <TextField
        fullWidth
        placeholder="Coupon Code"
        variant="outlined"
        size="medium"
        className="flex-1"
        {...register("couponCode")}
        error={!!errors.couponCode}
        helperText={errors.couponCode?.message}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "4px",
            fontSize: { xs: "0.875rem", md: "1rem" },
          },
        }}
      />

      <Button
        type="submit"
        variant="contained"
        color="error"
        className="!capitalize !font-medium whitespace-nowrap"
        sx={{
          px: { xs: 3, md: 5, lg: 6 },
          py: { xs: 1, md: 1.5, lg: 2 },
          fontSize: { xs: "0.875rem", md: "1rem" },
          minWidth: "fit-content",
        }}
      >
        Apply Coupon
      </Button>
    </Box>
  );
};

export default CouponCard;
