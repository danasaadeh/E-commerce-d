import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  IconButton,
  InputAdornment,
  List,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useDebounce } from "@/shared/hooks/debounce";
import { useSearchProducts } from "@/features/home/services/queries";
import ProductList from "@/features/home/components/products/products-list";
import { useWishlistStore } from "@/features/wish-list/store";
import { useCartStore } from "@/features/cart/store";
import "./style.css";

interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
}

const SearchDialog: React.FC<SearchDialogProps> = ({ open, onClose }) => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const { data: products, isLoading } = useSearchProducts(debouncedQuery);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const suggestions = ["Shoes", "Electronics", "T-Shirts", "Bags", "Laptops"];

  const { toggleWishlist } = useWishlistStore();
  const { addToCart } = useCartStore();

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  const handleToggleWishlist = (product: any) => toggleWishlist(product);

  const handleQuickView = (id: string) => {
    onClose();
    window.location.href = `/product/${id}`;
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <Dialog
      open={open}
      onClose={(event, reason) => {
        if (reason !== "backdropClick") onClose();
      }}
      fullScreen={isMobile}
      maxWidth="md"
      fullWidth
      PaperProps={{
        className: "search-dialog",
        sx: {
          backgroundColor: "#EFF0F6", // ✅ fixed solid color
          border: "1px solid #E0E0E0",
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          borderRadius: "1rem",
          overflow: "hidden",
        },
      }}
      BackdropProps={{
        sx: {
          backgroundColor: "rgba(0,0,0,0.3)", // soft dim background
          backdropFilter: "none", // ✅ remove blur behind dialog
        },
      }}
    >
      <DialogContent
        className="search-dialog-content"
        sx={{
          p: isMobile ? 2 : 4,
          backgroundColor: "#EFF0F6", // ✅ solid background
        }}
      >
        {/* 🔍 Search Header */}
        <div className="flex justify-between items-center mb-4">
          <TextField
            fullWidth
            placeholder="Search for products..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            variant="outlined"
            className="search-textfield"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AiOutlineSearch color="#666" />
                </InputAdornment>
              ),
              endAdornment: query && (
                <IconButton onClick={() => setQuery("")} sx={{ color: "#666" }}>
                  <AiOutlineClose />
                </IconButton>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#fff",
                borderRadius: "30px",
              },
            }}
          />
          <IconButton
            onClick={onClose}
            sx={{
              color: "#fff",
              ml: 1,
              backgroundColor: "#DB4444",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#b83636",
                transform: "scale(1.1)",
              },
            }}
          >
            <AiOutlineClose />
          </IconButton>
        </div>

        {/* 💡 Suggestions */}
        {!debouncedQuery && (
          <div>
            <p className="text-sm text-gray-600 mb-2">Popular Searches</p>
            <List dense disablePadding>
              {suggestions.map((s, index) => (
                <React.Fragment key={s}>
                  <ListItemButton
                    onClick={() => setQuery(s)}
                    className="search-suggestion"
                    sx={{
                      borderRadius: "12px",
                      "&:hover": { backgroundColor: "#e4e6f1" },
                    }}
                  >
                    <ListItemText primary={s} />
                  </ListItemButton>
                  {index < suggestions.length - 1 && (
                    <Divider sx={{ borderColor: "#ddd" }} />
                  )}
                </React.Fragment>
              ))}
            </List>
          </div>
        )}

        {/* 🧩 Search Results */}
        {debouncedQuery && (
          <div className="mt-6">
            <ProductList
              products={products}
              isLoading={isLoading}
              onAddToCart={(id) => {
                const product = products?.find((p) => p.id === id);
                if (product) handleAddToCart(product);
              }}
              onToggleWishlist={handleToggleWishlist}
              onQuickView={handleQuickView}
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
