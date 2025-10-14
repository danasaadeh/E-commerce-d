import { Box, Typography, Button } from "@mui/material";
import { useWishlistStore } from "../store";

export default function WishlistHeader() {
  const { wishlist, clearWishlist } = useWishlistStore();

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={4}
    >
      <Typography variant="h4" fontWeight={600}>
        Wishlist ({wishlist.length})
      </Typography>
      {wishlist.length > 0 && (
        <Button
          variant="text"
          sx={{ color: "#db4444", textTransform: "none" }}
          onClick={clearWishlist}
        >
          Remove All
        </Button>
      )}
    </Box>
  );
}
