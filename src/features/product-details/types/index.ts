// Backend types
export interface ProductCategory {
  id: number;
  name: string;
  image: string;
  slug: string;
}

export interface ProductDetails {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: ProductCategory;
  images: string[];
}

// UI type for home page cards
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
