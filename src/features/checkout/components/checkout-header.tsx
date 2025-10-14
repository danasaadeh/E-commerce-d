import React from "react";
import { Breadcrumbs, Link as MuiLink, Typography, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const CheckoutHeader: React.FC = () => {
  return (
    <Box className="mb-6">
      {/* Breadcrumbs */}
      <Breadcrumbs
        aria-label="breadcrumb"
        separator="/"
        className="text-sm text-gray-500"
      >
        <MuiLink
          component={RouterLink}
          to="/"
          underline="hover"
          color="inherit"
          className="text-gray-500 hover:text-gray-700"
        >
          Account
        </MuiLink>

        <MuiLink
          component={RouterLink}
          to="/account"
          underline="hover"
          color="inherit"
          className="text-gray-500 hover:text-gray-700"
        >
          My Account
        </MuiLink>

        <MuiLink
          component={RouterLink}
          to="/products"
          underline="hover"
          color="inherit"
          className="text-gray-500 hover:text-gray-700"
        >
          Product
        </MuiLink>

        <MuiLink
          component={RouterLink}
          to="/cart"
          underline="hover"
          color="inherit"
          className="text-gray-500 hover:text-gray-700"
        >
          View Cart
        </MuiLink>

        <Typography
          color="textPrimary"
          className="font-semibold text-gray-800"
          aria-current="page"
        >
          CheckOut
        </Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default CheckoutHeader;
