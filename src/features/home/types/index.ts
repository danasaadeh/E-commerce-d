// src/data/products.ts

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  badge?: {
    text: string;
    type: "sale" | "new";
  };
  colors?: string[];
}

export const products: Product[] = [
  {
    id: "1",
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    originalPrice: 160,
    image: "src/assets/images/home/jacket.png",
    rating: 5,
    reviewCount: 88,
    badge: { text: "Sale", type: "sale" },
  },
  {
    id: "2",
    name: "CANON EOS DSLR Camera",
    price: 360,
    image: "src/assets/images/home/jacket.png",
    rating: 4,
    reviewCount: 95,
  },
  {
    id: "3",
    name: "Kids Electric Car",
    price: 960,
    image: "src/assets/images/home/jacket.png",
    rating: 5,
    reviewCount: 65,
    badge: { text: "NEW", type: "new" },
    colors: ["#000000", "#FF0000"],
  },
  {
    id: "4",
    name: "Smart Watch Series 7",
    price: 399,
    originalPrice: 450,
    image: "src/assets/images/home/jacket.png",
    rating: 4,
    reviewCount: 50,
    badge: { text: "Sale", type: "sale" },
    colors: ["#111827", "#2563EB", "#F59E0B"],
  },
  {
    id: "5",
    name: "Smart Watch Series 7",
    price: 399,
    originalPrice: 450,
    image: "src/assets/images/home/jacket.png",
    rating: 4,
    reviewCount: 50,
    badge: { text: "Sale", type: "sale" },
    colors: ["#111827", "#2563EB", "#F59E0B"],
  },
];
