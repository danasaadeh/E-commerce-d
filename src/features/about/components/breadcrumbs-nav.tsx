import React from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BreadcrumbsNav: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" onClick={() => navigate("/")}>
        Home
      </Link>
      <Typography color="text.primary">About</Typography>
    </Breadcrumbs>
  );
};

export default BreadcrumbsNav;
