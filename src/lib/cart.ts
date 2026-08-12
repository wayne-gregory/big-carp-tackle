import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/lib/shop";

export type CartLine = {
  productId: string;
  slug: string;
  title: string;
  brand: string;
  price: number;
  quantity: number;
  maxStock: number;
};

type CartState = {
  lines: CartLine[];
  add: (product: Product, qty?: number) => void;
  remove: (productId: string) => void;
  setQty: (productId: string, quantity: number) => void;
  clear: () => void;
  count: () => number;
  subtotal: () => number;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      add: (product, qty = 1) => {
        set((state) => {
          const existing = state.lines.find((l) => l.productId === product.id);
          if (existing) {
            return {
              lines: state.lines.map((l) =>
                l.productId === product.id
                  ? {
                      ...l,
                      quantity: Math.min(l.maxStock, l.quantity + qty),
                    }
                  : l,
              ),
            };
          }
          return {
            lines: [
              ...state.lines,
              {
                productId: product.id,
                slug: product.slug,
                title: product.title,
                brand: product.brand,
                price: product.price,
                quantity: Math.min(product.stock, qty),
                maxStock: product.stock,
              },
            ],
          };
        });
      },
      remove: (productId) =>
        set((state) => ({
          lines: state.lines.filter((l) => l.productId !== productId),
        })),
      setQty: (productId, quantity) =>
        set((state) => ({
          lines: state.lines
            .map((l) =>
              l.productId === productId
                ? {
                    ...l,
                    quantity: Math.max(1, Math.min(l.maxStock, quantity)),
                  }
                : l,
            )
            .filter((l) => l.quantity > 0),
        })),
      clear: () => set({ lines: [] }),
      count: () => get().lines.reduce((n, l) => n + l.quantity, 0),
      subtotal: () =>
        get().lines.reduce((sum, l) => sum + l.price * l.quantity, 0),
    }),
    { name: "bcf-cart-v1" },
  ),
);
