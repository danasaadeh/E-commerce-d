import { lazy } from "react";
import AllProductsPage from "../pages/all-products-page";
import CategoryPage from "../pages/category-page";
import FilteredProductsPage from "../pages/filtered-products-page";

const HomePage = lazy(() => import("../pages/index"));

export const homeRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/products",
    element: <AllProductsPage />,
  },
  {
    path: "/category",
    element: <CategoryPage />,
  },
  {
    path: "/filter",
    element: <FilteredProductsPage />,
  },
];
