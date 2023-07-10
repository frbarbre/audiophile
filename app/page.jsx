import { products } from "./data"

export default function Home() {
  return (
    <main>
      {products.map((product) => (
        <h1>{product.name}</h1>
      ))}
    </main>
  )
}
