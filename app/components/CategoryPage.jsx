"use client";

import { products } from "../data";
import { usePathname } from "next/navigation";
import Categories from "./Categories";
import Pitch from "./Pitch";
import Top from "./Top";
import Products from "./Products";

export default function CategoryPage() {
  const pathname = usePathname();
  const splitPathname = pathname.split("/");
  const catagory = splitPathname[1];
  const categoryArray = products.filter(
    (product) => product.category === catagory
  );

  categoryArray.sort(function (a, b) {
    if (a.new > b.new) {
      return -1;
    }
    if (a.new < b.new) {
      return 1;
    }
    return 0;
  });

  return (
    <div>
      <Top pathname={pathname} />
      <div className="max-w-[1174px] mx-auto px-8">
        <Products categoryArray={categoryArray} pathname={pathname} />
        <Categories />
        <Pitch />
      </div>
    </div>
  );
}
