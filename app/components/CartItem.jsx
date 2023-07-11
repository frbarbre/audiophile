import { useCartStore } from "../store";

export default function CartItem({ product }) {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const addToCart = useCartStore((state) => state.addToCart);
  const minusOneFromCart = useCartStore((state) => state.minusOneFromCart);

  return (
    <div>
      <h1 className="text-red-600">
        {product.name}
        {product.quantity}
      </h1>
      <div className="flex gap-4">
        <button
          onClick={
            product.quantity === 1
              ? () => removeFromCart(product)
              : () => minusOneFromCart(product)
          }
        >
          -
        </button>
        <button onClick={() => removeFromCart(product)}>Remove product</button>
        <button onClick={() => addToCart(product)}>+</button>
      </div>
    </div>
  );
}
