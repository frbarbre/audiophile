import { useCartStore } from "../store";
import Image from "next/image";

export default function CartItem({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const minusOneFromCart = useCartStore((state) => state.minusOneFromCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  return (
    <div className="flex w-full justify-between mt-[24px] items-center">
      <div className="flex items-center">
        <Image
          src={product.image.mobile}
          width={64}
          height={64}
          alt="Logo"
          className="rounded-lg mr-[10px]"
        />
        <div className="font-bold">
          <p className="">{product.shortName}</p>
          <p className="opacity-50">$ {product.price.toLocaleString()}</p>
        </div>
      </div>
      <div className="flex min-w-[96px] h-[40px] bg-grey items-center justify-around">
        <button
          className="opacity-25 hover:text-orange hover:opacity-100"
          onClick={
            product.quantity === 1
              ? () => removeFromCart(product)
              : () => minusOneFromCart(product)
          }
        >
          -
        </button>
        <p className="font-bold">{product.quantity}</p>
        <button
          className="opacity-25 hover:text-orange hover:opacity-100"
          onClick={() => addToCart(product)}
        >
          +
        </button>
      </div>
    </div>
  );
}
