import { lazy } from "react";

const ContactPage = lazy(() => import("../pages/index"));

export const contactRoutes = [
  {
    path: "/contact",
    element: <ContactPage />,
  },
];
