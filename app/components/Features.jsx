import { nanoid } from "nanoid";

export default function Features({ productArray }) {
  return (
    <div className="py-[88px] md:pt-[120px] md:pb-[153px] lg:py-[160px] flex flex-col lg:flex-row gap-[88px] md:gap-[120px] lg:gap-[125px] w-full">
      <div>
        <h2 className="text-[24px] leading-[36px] tracking-[0.86px] font-bold pb-[24px] uppercase md:pb-[32px] md:text-[32px] md:tracking-[1.14px]">
          Features
        </h2>
        <p className="text-[15px] opacity-50 leading-[25px] font-medium max-w-[689px] lg:max-w-[635px]">{productArray.features}</p>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-col">
        <h2 className="text-[24px] leading-[36px] tracking-[0.86px] font-bold pb-[24px] uppercase md:pb-[32px] md:text-[32px] md:tracking-[1.14px] md:flex-1 lg:flex-none">
          In the box
        </h2>
        <ul className="md:flex-1 lg:flex-none gap-[8px] flex flex-col">
          {productArray.includedItems.map((item) => (
            <li key={nanoid()} className="flex gap-[21px] md:gap-[24px]">
              <p className="w-[18px] font-bold text-orange text-[15px] leading-[25px]">{item.quantity}x</p>
              <p className="font-medium opacity-50 text-[15px] leading-[25px]">{item.item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
