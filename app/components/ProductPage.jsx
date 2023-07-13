"use client";

import { products } from "../data";
import { usePathname } from "next/navigation";
import Product from "./Product";
import Categories from "./Categories";
import Pitch from "./Pitch";

export default function ProductPage() {
  const pathname = usePathname();
  const splitPathname = pathname.split("/");
  const productPath = splitPathname[2];
  const productArray = products.find((product) => product.slug === productPath);

  return (
    <div className="max-w-[1174px] mx-auto px-8">
      <Product productArray={productArray} />
      <Categories />
      <Pitch />
    </div>
  );
}
