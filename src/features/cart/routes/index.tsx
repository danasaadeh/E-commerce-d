import { lazy } from "react";

const CartPage = lazy(() => import("../pages/index"));

export const cartRoutes = [
  {
    path: "/cart",
    element: <CartPage />,
  },
];
