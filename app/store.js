import { create } from "zustand";
import { persist } from "zustand/middleware";

const INITIAL_STATE = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: INITIAL_STATE.cart,
      totalItems: INITIAL_STATE.totalItems,
      totalPrice: INITIAL_STATE.totalPrice,

      submitToCart: (product, count) => {
        const cart = get().cart;
        const cartItem = cart.find((item) => item.id === product.id);

        if (cartItem) {
          const updatedCart = cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + count }
              : item
          );
          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + count,
            totalPrice: state.totalPrice + product.price,
          }));
        } else {
          const updatedCart = [...cart, { ...product, quantity: count }];

          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + count,
            totalPrice: state.totalPrice + product.price,
          }));
        }
      },

      addToCart: (product) => {
        const cart = get().cart;
        const cartItem = cart.find((item) => item.id === product.id);

        if (cartItem) {
          const updatedCart = cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems + 1,
            totalPrice: state.totalPrice + product.price,
          }));
        }
      },

      minusOneFromCart: (product) => {
        const cart = get().cart;
        const cartItem = cart.find((item) => item.id === product.id);

        if (cartItem) {
          const updatedCart = cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
          set((state) => ({
            cart: updatedCart,
            totalItems: state.totalItems - 1,
            totalPrice: state.totalPrice + product.price,
          }));
        }
      },

      removeFromCart: (product) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== product.id),
          totalItems: state.totalItems - 1,
          totalPrice: state.totalPrice - product.price,
        }));
      },

      emptyCart: () => {
        set(() => ({
          cart: [],
          totalItems: INITIAL_STATE.totalItems,
          totalPrice: INITIAL_STATE.totalPrice,
        }));
      },
    }),
    {
      name: "cart-storage",
    }
  )
);

const store = (set) => ({
  succes: false,
  setSucces: (succes) => set(() => ({ succes: succes })),
});

export const useStore = create(store)
