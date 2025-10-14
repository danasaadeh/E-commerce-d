import { Grid, Typography, Skeleton } from "@mui/material";
import ProductCard from "@/features/home/components/products/prouct-card";
import type { Product } from "@/features/home/types";

interface ProductListProps {
  products?: Product[];
  isLoading?: boolean;
  onAddToCart?: (id: string) => void;
  onToggleWishlist?: (product: Product) => void;
  onQuickView?: (id: string) => void;
}

export default function ProductList({
  products = [],
  isLoading,
  onAddToCart,
  onToggleWishlist,
  onQuickView,
}: ProductListProps) {
  if (isLoading) {
    // 👇 render 8 skeletons in a grid, similar to the product card layout
    return (
      <Grid container spacing={3} justifyContent="center">
        {Array.from({ length: 8 }).map((_, index) => (
          <Grid key={index}>
            <div className="flex flex-col items-center">
              <Skeleton
                variant="rectangular"
                width={250}
                height={200}
                sx={{ borderRadius: 1 }}
              />
              <Skeleton
                animation="wave"
                width="80%"
                height={24}
                sx={{ mt: 1 }}
              />
              <Skeleton animation="wave" width="60%" height={20} />
              <Skeleton animation="wave" width="40%" height={20} />
            </div>
          </Grid>
        ))}
      </Grid>
    );
  }

  if (!products?.length) {
    return (
      <Typography variant="body1" align="center" sx={{ py: 4 }}>
        No products found.
      </Typography>
    );
  }

  return (
    <Grid container spacing={3} justifyContent="center">
      {products.map((product) => (
        <Grid key={product.id}>
          <ProductCard
            product={product}
            onAddToCart={onAddToCart}
            onToggleWishlist={onToggleWishlist}
            onQuickView={onQuickView}
          />
        </Grid>
      ))}
    </Grid>
  );
}
