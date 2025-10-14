import { Product } from "@/features/home/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface WishlistState {
  wishlist: Product[];
  toggleWishlist: (product: Product) => void;
  removeFromWishlist: (id: string) => void;
  clearWishlist: () => void;
}

export const useWishlistStore = create<WishlistState>()(
  persist(
    (set, get) => ({
      wishlist: [],
      toggleWishlist: (product) => {
        const exists = get().wishlist.find((p) => p.id === product.id);
        if (exists) {
          set({ wishlist: get().wishlist.filter((p) => p.id !== product.id) });
        } else {
          set({ wishlist: [...get().wishlist, product] });
        }
      },
      removeFromWishlist: (id) => {
        set({ wishlist: get().wishlist.filter((p) => p.id !== id) });
      },
      clearWishlist: () => set({ wishlist: [] }),
    }),
    { name: "wishlist-storage" }
  )
);
