import { Box, Typography } from "@mui/material";

const CartHeader = () => {
  return (
    <Box
      className="bg-white shadow-sm rounded-md"
      sx={{
        py: { xs: 2, md: 3 },
        px: { xs: 2, sm: 3, md: 4, lg: 6 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: "center",
          gap: { xs: 1, sm: 2, md: 4 },
        }}
      >
        <Typography
          variant="body1"
          className="font-medium flex-1"
          sx={{ fontSize: { xs: "0.875rem", md: "1rem" } }}
        >
          Product
        </Typography>

        <Typography
          variant="body1"
          className="font-medium flex-1 hidden sm:block"
          sx={{
            fontSize: { xs: "0.875rem", md: "1rem" },
            textAlign: "center",
          }}
        >
          Price
        </Typography>

        <Typography
          variant="body1"
          className="font-medium flex-1"
          sx={{
            fontSize: { xs: "0.875rem", md: "1rem" },
            textAlign: "center",
          }}
        >
          Quantity
        </Typography>

        <Typography
          variant="body1"
          className="font-medium flex-1"
          sx={{
            fontSize: { xs: "0.875rem", md: "1rem" },
            textAlign: "center",
          }}
        >
          Subtotal
        </Typography>
      </Box>
    </Box>
  );
};

export default CartHeader;
