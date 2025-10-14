import { lazy } from "react";

const WishListPage = lazy(() => import("../pages/index"));

export const wishListRoutes = [
  {
    path: "/wishList",
    element: <WishListPage />,
  },
];
