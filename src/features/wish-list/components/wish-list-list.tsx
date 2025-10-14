import ProductCard from "@/features/home/components/products/prouct-card";
import { Grid } from "@mui/material";
import { useWishlistStore } from "../store";

export default function WishlistList() {
  const { wishlist, toggleWishlist } = useWishlistStore();

  if (wishlist.length === 0) return null;

  return (
    <Grid container spacing={3}>
      {wishlist.map((product) => (
        <Grid key={product.id}>
          <ProductCard
            product={product}
            onToggleWishlist={toggleWishlist}
            wishlistMode
          />
        </Grid>
      ))}
    </Grid>
  );
}
