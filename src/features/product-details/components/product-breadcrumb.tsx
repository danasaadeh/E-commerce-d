import { Breadcrumbs, Link as MuiLink, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const ProductBreadcrumb = () => {
  return (
    <Breadcrumbs aria-label="breadcrumb" separator="/" className="text-sm mb-6">
      <MuiLink
        component={RouterLink}
        to="/account"
        underline="hover"
        sx={{
          color: "#7F7F7F",
        }}
        className="text-gray-600 hover:text-gray-900"
      >
        Account
      </MuiLink>
      <MuiLink
        component={RouterLink}
        to="/gaming"
        underline="hover"
        sx={{
          color: "#7F7F7F",
        }}
        className="text-gray-600 hover:text-gray-900"
      >
        Gaming
      </MuiLink>
      <Typography className="font-medium text-gray-900">
        Havic HV G-92 Gamepad
      </Typography>
    </Breadcrumbs>
  );
};

export default ProductBreadcrumb;
