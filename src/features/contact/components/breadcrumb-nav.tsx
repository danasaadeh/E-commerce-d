import type React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface BreadcrumbsNavProps {
  current: string;
}

const BreadcrumbsNav: React.FC<BreadcrumbsNavProps> = ({ current }) => {
  const navigate = useNavigate();

  return (
    <Breadcrumbs aria-label="breadcrumb" className="py-4">
      <Link
        underline="hover"
        color="inherit"
        onClick={() => navigate("/")}
        sx={{ cursor: "pointer", color: "#666" }}
      >
        Home
      </Link>
      <Typography color="text.primary" sx={{ color: "#000" }}>
        {current}
      </Typography>
    </Breadcrumbs>
  );
};

export default BreadcrumbsNav;
