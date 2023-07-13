"use client";
import Categories from "./Categories";
import { useState } from "react";
export default function BurgerMenu() {
  return (
    <div className="lg:hidden">
      <div className=" absolute bg-white rounded-b-lg w-[100%] z-30 px-6">
        <div className="px-6 mt-[80px]"></div>
        <Categories />
      </div>
    </div>
  );
}
