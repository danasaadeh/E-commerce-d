import React, { useState } from "react";
import { Box, CircularProgress, Pagination } from "@mui/material";
import ProductsContainer from "@/shared/layout/products-container";
import ProductList from "../components/products/products-list";
import { useAllProducts } from "../services/queries";

const ITEMS_PER_PAGE = 10;

const AllProductsPage = () => {
  const [page, setPage] = useState(1);
  const offset = (page - 1) * ITEMS_PER_PAGE;

  const { data: products, isLoading } = useAllProducts(offset, ITEMS_PER_PAGE);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
      <Box display="flex" justifyContent="center" mt={4}>
        <Pagination
          count={10} // ⚠️ If API returns total count, use Math.ceil(total / ITEMS_PER_PAGE)
          page={page}
          onChange={handlePageChange}
          color="primary"
          sx={{
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "#DB4444",
              color: "#fff",
            },
          }}
        />
      </Box>
    </ProductsContainer>
  );
};

export default AllProductsPage;
