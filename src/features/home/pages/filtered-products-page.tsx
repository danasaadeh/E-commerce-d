import React from "react";
import { useSearchParams } from "react-router-dom";
import ProductsContainer from "@/shared/layout/products-container";
import ProductList from "../components/products/products-list";
import { useFilteredProducts } from "../services/queries";
import { CircularProgress } from "@mui/material";
import { Box } from "@mui/system";

const FilteredProductsPage = () => {
  const [params] = useSearchParams();
  const filters = Object.fromEntries(params.entries());
  const { data: products, isLoading } = useFilteredProducts(filters);

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

  return (
    <ProductsContainer>
      <ProductList products={products ?? []} />
    </ProductsContainer>
  );
};

export default FilteredProductsPage;
