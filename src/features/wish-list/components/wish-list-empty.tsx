import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { appRoutes } from "@/routes";

export default function WishlistEmpty() {
  return (
    <Box textAlign="center" py={10}>
      <Typography variant="h5" fontWeight={600} mb={2}>
        Your wishlist is empty
      </Typography>
      <Typography color="text.secondary" mb={3}>
        Explore our products and add items to your wishlist!
      </Typography>
      <Link to={appRoutes.home}>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#db4444",
            "&:hover": { bgcolor: "#b93737" },
            textTransform: "none",
            px: 5,
            py: 1.5,
          }}
        >
          Start Shopping
        </Button>
      </Link>
    </Box>
  );
}
