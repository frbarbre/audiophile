import Link from "next/link";
import Button from "./Button";

export default function Products({ categoryArray, pathname }) {
  return (
    <div className="mt-[64px] md:mt-[120px] lg:mt-[160px] mb-[104px] md:mb-[160px] lg:mb-[180px] flex flex-col gap-[120px] lg:gap-[160px]">
      {categoryArray.map((category) => (
        <div className="flex flex-col lg:flex-row lg:even:flex-row-reverse gap-[32px] md:gap-[52px] lg:gap-[125px] items-center">
          <div>
            <img
              className="hidden lg:block rounded-[8px]"
              src={category.categoryImage.desktop}
              alt={category.shortName}
            />
            <img
              className="hidden md:block lg:hidden rounded-[8px]"
              src={category.categoryImage.tablet}
              alt={category.shortName}
            />
            <img
              className="md:hidden rounded-[8px]"
              src={category.categoryImage.mobile}
              alt={category.shortName}
            />
          </div>
          <div className="lg:max-w-[445px] w-full flex flex-col items-center lg:items-start gap-[24px] lg:gap-[32px]">
            {category.new && <h3 className="text-orange text-[14px] tracking-[10px] uppercase lg:mb-[-16px] text-center lg:text-left">New Product</h3>}
            <h2 className="md:-translate-y-2 lg:translate-y-0 text-center lg:text-left font-bold text-[28px] tracking-[1px] uppercase md:text-[40px] md:tracking-[1.43px] md:leading-[44px]">{category.name}</h2>
            <p className="max-w-[327px] text-center lg:text-left md:max-w-[572px] opacity-50 text-[15px] leading-[25px]">{category.description}</p>
            <Link href={`${pathname}/${category.slug}`} className="lg:mt-[8px]">
              <Button
                text={"See product"}
                color={"bg-orange hover:bg-orange-pale text-white"}
              />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
