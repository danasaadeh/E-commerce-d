import React from "react";
import { useSearchParams } from "react-router-dom";
import { Box, CircularProgress, Typography } from "@mui/material";
import ProductsContainer from "@/shared/layout/products-container";
import ProductList from "../components/products/products-list";
import { useProductsByCategorySlug } from "../services/queries";

const CategoryPage = () => {
  const [params] = useSearchParams();
  const slug = params.get("slug"); // ✅ read from ?slug=...
  const {
    data: products,
    isLoading,
    isError,
  } = useProductsByCategorySlug(slug || "");

  if (!slug)
    return (
      <Typography align="center" sx={{ mt: 10 }}>
        No category selected.
      </Typography>
    );

  if (isLoading)
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <CircularProgress sx={{ color: "#DB4444" }} size={60} thickness={5} />
      </Box>
    );

  if (isError)
    return (
      <Typography align="center" sx={{ mt: 10 }}>
        Failed to load products for this category.
      </Typography>
    );

  return (
    <ProductsContainer>
      <Typography
        variant="h5"
        sx={{
          mb: 3,
          fontWeight: "bold",
          textTransform: "capitalize",
          textAlign: "center",
        }}
      >
        {slug} Products
      </Typography>

      <ProductList products={products ?? []} />
    </ProductsContainer>
  );
};

export default CategoryPage;
