import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Drawer,
  Button,
  List,
  ListItemButton,
  useMediaQuery,
} from "@mui/material";
import { KeyboardArrowRight, FilterList, Close } from "@mui/icons-material";
import { useTheme as useMuiTheme } from "@mui/material/styles";
import { useNavigate, useSearchParams } from "react-router-dom";

// 🗂 Category mapping
const categoryMap: Record<string, string> = {
  "Woman's Fashion": "clothes",
  "Men's Fashion": "clothes",
  Electronics: "electronics",
  "Home & Lifestyle": "furniture",
  Medicine: "medicine",
  "Sports & Outdoor": "sports",
  "Baby's & Toys": "toys",
  "Groceries & Pets": "groceries",
  "Health & Beauty": "beauty",
};

const categories = Object.keys(categoryMap);

const CategorySidebar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentSlug = searchParams.get("slug");

  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("md"));

  const handleCategoryClick = (category: string) => {
    const slug = categoryMap[category];
    if (!slug) return;
    navigate(`/category?slug=${slug}`);
    setOpen(false);
  };

  const categoryList = (
    <List disablePadding>
      {categories.map((category) => {
        const slug = categoryMap[category];
        const isActive = slug === currentSlug;

        return (
          <ListItemButton
            key={category}
            onClick={() => handleCategoryClick(category)}
            sx={{
              py: 1.4,
              px: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: 0,
              fontSize: 15,
              fontWeight: isActive ? 600 : 400,
              color: isActive ? "#DB4444" : "#000",
              "&:hover": {
                bgcolor: "transparent",
                color: "#DB4444",
              },
            }}
          >
            <Typography sx={{ fontSize: 15 }}>{category}</Typography>
            {category.includes("Fashion") && (
              <KeyboardArrowRight
                sx={{
                  fontSize: 14,
                  color: isActive ? "#DB4444" : "#777",
                }}
              />
            )}
          </ListItemButton>
        );
      })}
    </List>
  );

  // 📱 MOBILE VIEW
  if (isMobile) {
    return (
      <Box sx={{ mb: 2 }}>
        {/* Filter button at top */}
        <Box display="flex" justifyContent="flex-start" mb={2} px={2}>
          <Button
            variant="outlined"
            startIcon={<FilterList />}
            onClick={() => setOpen(true)}
            sx={{
              textTransform: "none",
              fontSize: 14,
              borderColor: "#ccc",
              color: "#000",
              "&:hover": {
                borderColor: "#DB4444",
                color: "#DB4444",
              },
            }}
          >
            Filters
          </Button>
        </Box>

        {/* Drawer with categories */}
        <Drawer
          anchor="bottom"
          open={open}
          onClose={() => setOpen(false)}
          PaperProps={{
            sx: {
              height: "75%",
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              bgcolor: "#fff",
            },
          }}
        >
          {/* Drawer Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2,
              borderBottom: "1px solid #ddd",
            }}
          >
            <Typography sx={{ fontWeight: 600, fontSize: 16 }}>
              Categories
            </Typography>
            <IconButton onClick={() => setOpen(false)}>
              <Close />
            </IconButton>
          </Box>

          {/* Category list inside drawer */}
          <Box sx={{ p: 2, overflowY: "auto" }}>{categoryList}</Box>
        </Drawer>
      </Box>
    );
  }

  // 🖥 DESKTOP VIEW
  return (
    <Box
      sx={{
        width: 240,
        borderRight: "1px solid #eee",
        pr: 2,
      }}
    >
      {categoryList}
    </Box>
  );
};

export default CategorySidebar;
