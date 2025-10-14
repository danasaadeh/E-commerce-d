import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

// Import icons as string paths (not React components)
import StorefrontIcon from "../../../assets/icons/about/shop.svg";
import MoneyIcon from "../../../assets/icons/about/Icon-Sale.svg";
import ShoppingBagIcon from "../../../assets/icons/about/Icon-Shoppingbag.svg";
import SalesIcon from "../../../assets/icons/about/Icon-Moneybag.svg";

const stats = [
  {
    icon: StorefrontIcon,
    value: "10.5k",
    label: "Sellers active on our site",
  },
  {
    icon: MoneyIcon,
    value: "33k",
    label: "Monthly Product Sales",
  },
  {
    icon: ShoppingBagIcon,
    value: "45.5k",
    label: "Customers active on our site",
  },
  {
    icon: SalesIcon,
    value: "25k",
    label: "Annual gross sales",
  },
];

const StatsSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(4, 1fr)" },
        gap: 4,
        px: 4,
        py: 8,
      }}
    >
      {stats.map((stat, idx) => {
        const isHovered = hoveredIndex === idx;

        return (
          <Box
            key={idx}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            sx={{
              p: 4,
              borderRadius: 2,
              border: "1px solid",
              borderColor: isHovered ? "red" : "grey.300",
              bgcolor: isHovered ? "red" : "white",
              color: isHovered ? "white" : "black",
              textAlign: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
              },
            }}
          >
            {/* Outer circle */}
            <Box
              sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                bgcolor: isHovered ? "rgba(255,255,255,0.3)" : "grey.400",
                mx: "auto",
                mb: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "0.3s",
              }}
            >
              {/* Inner circle */}
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  bgcolor: isHovered ? "white" : "black",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "0.3s",
                }}
              >
                <Box
                  component="img"
                  src={stat.icon}
                  alt={stat.label}
                  sx={{
                    width: 28,
                    height: 28,
                    filter: isHovered ? "invert(0)" : "invert(1)", // white default, black on hover
                    transition: "0.3s",
                  }}
                />
              </Box>
            </Box>

            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 1,
                transition: "0.3s",
                color: isHovered ? "white" : "black",
              }}
            >
              {stat.value}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                transition: "0.3s",
                color: isHovered ? "white" : "black",
              }}
            >
              {stat.label}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default StatsSection;
