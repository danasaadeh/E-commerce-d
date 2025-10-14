// src/features/checkout/routes.tsx
import { lazy } from "react";
import { AuthPageGuard } from "@/features/auth/guards/auth-guard";

const CheckoutPage = lazy(() => import("../pages/index"));

export const checkoutRoutes = [
  {
    path: "/checkout",
    element: (
      <AuthPageGuard>
        <CheckoutPage />
      </AuthPageGuard>
    ),
  },
];
