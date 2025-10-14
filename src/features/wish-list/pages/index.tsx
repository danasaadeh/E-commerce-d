"use client";

import { Box, Button, Typography } from "@mui/material";

import { useWishlistStore } from "../store";
import WishlistList from "../components/wish-list-list";
import JustForYouSection from "../components/just-for-you-section";

export default function WishlistPage() {
  const { wishlist, clearWishlist } = useWishlistStore();

  return (
    <Box className="container mx-auto py-10">
      {/* 🧾 Header */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={6}
      >
        <Typography variant="h5" sx={{ fontWeight: 600 }}>
          Wishlist ({wishlist.length})
        </Typography>

        {wishlist.length > 0 && (
          <Button
            variant="outlined"
            onClick={clearWishlist}
            sx={{
              borderColor: "#000",
              color: "#000",
              textTransform: "none",
              borderRadius: "4px",
              px: 3,
              py: 1,
              fontWeight: 500,
              "&:hover": { borderColor: "#000", bgcolor: "#f5f5f5" },
            }}
          >
            Move All To Bag
          </Button>
        )}
      </Box>

      {/* ❤️ Wishlist Grid */}
      <WishlistList />

      {/* 💡 Just For You Section */}
      <Box mt={10}>
        <JustForYouSection />
      </Box>
    </Box>
  );
}
