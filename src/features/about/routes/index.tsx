import { lazy } from "react";

const AboutPage = lazy(() => import("../pages/index"));

export const aboutRoutes = [
  {
    path: "/about",
    element: <AboutPage />,
  },
];
