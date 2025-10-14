import { Box, Typography, Link, Divider } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";

const ProductDeliveryInfo = () => {
  return (
    <Box className="mt-8 border-2 border-gray-300 rounded-md overflow-hidden">
      {/* Free Delivery */}
      <Box className="flex items-start gap-4 p-5">
        <LocalShippingOutlinedIcon className="text-gray-700 mt-1" />
        <Box className="flex-1">
          <Typography
            variant="body1"
            className="font-semibold text-gray-900 mb-1"
          >
            Free Delivery
          </Typography>
          <Link
            href="#"
            underline="always"
            sx={{
              color: "#101828",
              "&:hover": { color: "#111" },
              fontSize: "0.875rem",
            }}
          >
            Enter your postal code for Delivery Availability
          </Link>
        </Box>
      </Box>

      <Divider />

      {/* Return Delivery */}
      <Box className="flex items-start gap-4 p-5">
        <AutorenewOutlinedIcon className="text-gray-700 mt-1" />
        <Box className="flex-1">
          <Typography
            variant="body1"
            className="font-semibold text-gray-900 mb-1"
          >
            Return Delivery
          </Typography>
          <Typography variant="body2" className="text-gray-700">
            Free 30 Days Delivery Returns.{" "}
            <Link
              href="#"
              underline="always"
              sx={{
                color: "#101828",
                "&:hover": { color: "#111" },
              }}
            >
              Details
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDeliveryInfo;
