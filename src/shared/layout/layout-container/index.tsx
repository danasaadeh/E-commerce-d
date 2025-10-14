import React, { type ReactNode } from "react";
import Footer from "../footer";
import Navbar from "../navbar";
import SignupPage from "../../../features/auth/components/sign-up-form";
import LoginPage from "../../../features/auth/components/login-form";
import { useLocation } from "react-router-dom";

interface LayoutContainerProps {
  children: ReactNode;
}

export function LayoutContainer({ children }: LayoutContainerProps) {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar stays at top */}
      <Navbar />

      {/* Page content grows and pushes footer down */}
      <main className="flex-1">{children}</main>

      {/* Footer stays at bottom */}
      <Footer />
    </div>
  );
}
