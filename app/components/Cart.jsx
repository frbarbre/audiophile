import { useCartStore } from "../store";
import CartItem from "./CartItem";
import useFromStore from "../hooks/useFromStore";
import { nanoid } from "nanoid";

export default function Cart() {
  const cart = useFromStore(useCartStore, (state) => state.cart);

  let total = 0;

  if (cart) {
    total = cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  }

  console.log(cart);

  return (
    <div>
      {cart?.map((product) => (
        <CartItem product={product} key={nanoid()} />
      ))}
      <h1 className="text-red-600">Total: {total}</h1>
    </div>
  );
}
