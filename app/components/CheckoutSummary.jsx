'use client'

import { useCartStore } from "../store";
import useFromStore from "../hooks/useFromStore";
import { nanoid } from "nanoid";

export default function CheckoutSummary() {
  const cart = useFromStore(useCartStore, (state) => state.cart);
  const emptyCart = useCartStore((state) => state.emptyCart);

  let totalPrice = 0;

  let totalItems = 0;

  if (cart) {
    totalPrice = cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );

    totalItems = cart.reduce((acc, product) => acc + product.quantity, 0);
  }

  return (
    <div>
      {cart?.map((item) => (
        <h1 key={nanoid()}>{item.shortName}, {item.quantity}</h1>
      ))}
    </div>
  );
}
