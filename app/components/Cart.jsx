import { useCartStore } from "../store";
import CartItem from "./CartItem";
import Button from "./Button";
import useFromStore from "../hooks/useFromStore";
import { nanoid } from "nanoid";
import Link from "next/link";
import Image from "next/image";

export default function Cart({ openCart, setOpenCart }) {
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
    <div className="z-30 relative bg-white px-6 rounded-lg md:w-[377px]">
      <div className="">
        <div className="flex justify-between pt-[32px] pb-[7px]">
          <h2 className="font-bold text-[18px] ">CART ({totalItems}) </h2>
          {cart && cart.length ? (
            <button
              className="font-medium opacity-50 underline underline-offset-1 text-[15px] hover:text-orange hover:opacity-100"
              onClick={emptyCart}
            >
              Remove all
            </button>
          ) : (
            ""
          )}
        </div>
        {cart && cart.length ? (
          ""
        ) : (
          <div className="flex justify-center mt-10">
            <div>
              <p className="text-center">Cart is empty</p>
              <Image
                src="/cart/empty-cart-icon.svg"
                width={200}
                height={200}
                alt="Empty cart"
              />
            </div>
          </div>
        )}
        {cart?.map((product) => (
          <div>
            <CartItem product={product} key={nanoid()} />
          </div>
        ))}
        <div className="flex justify-between mt-[32px]">
          <p className="font-medium opacity-50 text-[15px]">TOTAL</p>
          <p className="font-bold text-[18px]">
            ${totalPrice.toLocaleString()}
          </p>
        </div>
        <div className="py-6">
          {cart && cart.length ? (
            <Link href="/checkout" onClick={() => setOpenCart(!openCart)}>
              <Button
                text="CHECKOUT"
                color="bg-orange hover:bg-orange-pale w-full text-white"
              />
            </Link>
          ) : (
            <Button
              text="CHECKOUT"
              color="bg-dark-gray w-full text-white cursor-not-allowed"
            />
          )}
        </div>
      </div>
    </div>
  );
}
