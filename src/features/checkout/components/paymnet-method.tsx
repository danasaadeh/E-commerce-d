import { Box, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import bkash from "@/assets/images/checkout/bkash.png";
import visa from "@/assets/images/checkout/visa.png";
import master from "@/assets/images/checkout/master_card.png";
import orange from "@/assets/images/checkout/orange.png";

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
            <img src={bkash} alt="Visa" className="h-6" />
            <img src={visa} alt="Visa" className="h-6" />
            <img src={master} alt="Mastercard" className="h-6" />
            <img src={orange} alt="PayPal" className="h-6" />
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
