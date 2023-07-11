"use client";

import { products } from "../data";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function CategoryPage() {
  const pathname = usePathname();
  const splitPathname = pathname.split("/");
  const catagory = splitPathname[1];
  const catagoryArray = products.filter(
    (product) => product.category === catagory
  );

  return (
    <div>
      {catagoryArray.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <Link href={`${pathname}/${product.slug}`}>SEE PRODUCT</Link>
        </div>
      ))}
    </div>
  );
}
