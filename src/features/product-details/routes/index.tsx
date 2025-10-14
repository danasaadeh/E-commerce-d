import { lazy } from "react";

const ProductDetailsPage = lazy(() => import("../pages/index"));

export const productDetailsRoutes = [
  {
    path: "product/:id",
    element: <ProductDetailsPage />,
  },
];
