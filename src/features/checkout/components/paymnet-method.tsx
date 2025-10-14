import { Box, Radio, RadioGroup, FormControlLabel } from "@mui/material";

const PaymentMethod = () => {
  return (
    <Box className="py-6 border-b border-gray-200">
      <RadioGroup defaultValue="bank" className="gap-4">
        <Box className="flex items-center justify-between">
          <FormControlLabel
            value="bank"
            control={<Radio />}
            label="Bank"
            className="m-0"
          />
          <Box className="flex items-center gap-2">
            <img
              src="src/assets/images/checkout/bkash.png"
              alt="Visa"
              className="h-6"
            />
            <img
              src="src/assets/images/checkout/visa.png"
              alt="Visa"
              className="h-6"
            />
            <img
              src="/src/assets/images/checkout/master_card.png"
              alt="Mastercard"
              className="h-6"
            />
            <img
              src="/src/assets/images/checkout/orange.png"
              alt="PayPal"
              className="h-6"
            />
          </Box>
        </Box>

        <FormControlLabel
          value="cash"
          control={<Radio />}
          label="Cash on delivery"
          className="m-0"
        />
      </RadioGroup>
    </Box>
  );
};

export default PaymentMethod;
