import { products } from "../data";
import Link from "next/link";
import Button from "./Button";

export default function EarbudProme() {
  const earphone = products[0];

  return (
    <div className="h-[424px] md:h-[320px] mt-[24px] md:mt-[32px] lg:mt-[48px] gap-[24px] md:gap-[11px] lg:gap-[30px] flex flex-col md:flex-row">
      <div>
        <img
          className="w-full h-[200px] object-cover md:hidden rounded-[8px]"
          src="/home/mobile/image-earphones-yx1.jpg"
          alt="earphones"
        />
        <img
          className="max-w-[339px] h-full object-cover hidden md:block lg:hidden rounded-[8px]"
          src="/home/tablet/image-earphones-yx1.jpg"
          alt="earphones"
        />
        <img
          className="hidden lg:block rounded-[8px] h-full max-w-[540px]"
          src="/home/desktop/image-earphones-yx1.jpg"
          alt="earphones"
        />
      </div>
      <div className="flex flex-col gap-[32px] justify-center h-[200px] md:h-[320px] bg-grey w-full pl-[24px] md:pl-[41px] lg:pl-[95px] rounded-[8px]">
        <h2 className="uppercase font-bold text-[28px] tracking-[2px]">{earphone.name.replace("Wireless", "")}</h2>
        <Link href={`/earphones/${earphone.slug}`} className="w-max">
          <Button
            color={
              "border-[1px] border-black hover:bg-black text-black hover:text-white"
            }
            text={"See Product"}
          />
        </Link>
      </div>
    </div>
  );
}
