import { products } from "@/features/home/types";
import { Category } from "@mui/icons-material";

export const appRoutes = {
  auth: {
    login: "/login",
    signUp: "/sign-up",
  },
  home: "/",
  contact: "/contact",
  about: "/about",
  products: "/products",
  checkout: "/checkout",
  product_details: "product/:id",
  category: "/category",
  filter: "/filter",
  wishList: "/wishList",
  cart: "/cart",
};
