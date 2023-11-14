import { products } from "../data";
import Link from "next/link";
import Button from "./Button";

export default function EarbudProme() {
  const pc = products[0];

  return (
    <div className="h-[424px] md:h-[320px] mt-[24px] md:mt-[32px] lg:mt-[48px] gap-[24px] md:gap-[11px] lg:gap-[30px] flex flex-col md:flex-row">
      <div className="bg-grey rounded-[8px]">
        <img
          className="w-full h-[200px] md:h-[320px] object-contain rounded-[8px]"
          src="/starter/starter-gallery-2.png"
          alt="earphones"
        />
      </div>
      <div className="flex flex-col gap-[32px] justify-center h-[200px] md:h-[320px] bg-grad w-full md:pl-[41px] lg:pl-[95px] rounded-[8px]">
        <h2 className="uppercase font-bold text-[28px] tracking-[2px] text-white text-center md:text-left">
          {pc.name}
        </h2>
        <Link href={`/earphones/${pc.slug}`} className="w-max mx-auto md:mx-0">
          <Button
            color={
              "border-[1px] border-white hover:bg-white text-white hover:text-black"
            }
            text={"See Product"}
          />
        </Link>
      </div>
    </div>
  );
}
