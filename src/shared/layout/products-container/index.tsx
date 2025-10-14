import React from "react";
import { Box, Container } from "@mui/material";
import CategorySidebar from "@/features/home/components/category-sidebar";

interface ProductsContainerProps {
  children: React.ReactNode;
}

const ProductsContainer: React.FC<ProductsContainerProps> = ({ children }) => {
  return (
    <Container maxWidth="xl" className="py-8">
      <Box className="flex flex-col lg:flex-row gap-6">
        <Box className="hidden lg:block lg:col-span-3">
          <CategorySidebar />
        </Box>

        {/* Main Content */}
        <Box className="flex-1">{children}</Box>
      </Box>
    </Container>
  );
};

export default ProductsContainer;
