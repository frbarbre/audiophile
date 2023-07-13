import { nanoid } from "nanoid";
import Link from "next/link";
import Button from "./Button";

export default function Recommended({ productArray }) {
  return (
    <div className="pb-[120px] lg:pb-[160px]">
      <h2 className="text-[24px] text-center leading-[36px] tracking-[0.86px] font-bold pb-[40px] uppercase md:pb-[56px] lg:pb-[64px] md:text-[32px] md:tracking-[1.14px] md:flex-1 lg:flex-none">
        You may also like
      </h2>
      <div className="flex flex-col md:flex-row w-full gap-[56px] md:gap-[11px] lg:gap-[30px]">
        {productArray.others.map((other) => (
          <div key={nanoid()} className="w-full">
            <div className="w-full bg-grey flex justify-center items-center rounded-[8px]">
              <img
                className="rounded-[8px] max-h-[120px] object-cover md:hidden"
                src={other.image.mobile}
                alt={other.name}
              />
              <img
                className="rounded-[8px] max-h-[318px] object-cover hidden md:block lg:hidden"
                src={other.image.tablet}
                alt={other.name}
              />
              <img
                className="rounded-[8px] max-h-[318px] object-cover hidden lg:block"
                src={other.image.desktop}
                alt={other.name}
              />
            </div>
            <article className="w-full flex flex-col items-center">
              <h3 className="py-[32px] md:pt-[40px] font-bold text-[24px] tracking-[1.71px] uppercase">{other.name}</h3>
              <Link href={`/${other.slug}`}>
                <Button
                  text={"See product"}
                  color={"bg-orange hover:bg-orange-pale text-white"}
                />
              </Link>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
}
