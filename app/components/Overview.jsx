import AddToCart from "./AddToCart";

export default function Overview({ productArray }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center w-full gap-[40px] md:gap-[69px] lg:gap-[124.5px]">
      <div className="w-full">
        <img
          className="rounded-[8px] max-h-[560px] w-full aspect-square object-contain"
          src={productArray?.image}
          alt={productArray.shortName}
        />
      </div>
      <div className="md:w-max">
        {productArray.new && (
          <h3 className="text-primary text-[14px] tracking-[10px] uppercase pb-[24px] md:pb-[17px] lg:pb-[16px]">
            New Product
          </h3>
        )}
        <h1 className="font-bold text-[28px] tracking-[1px] uppercase md:text-[40px] md:tracking-[1.43px] md:leading-[44px] pb-[24px] md:pb-[32px]">
          {productArray.name}
        </h1>
        <p className="max-w-[327px] md:max-w-none md:w-[339px] lg:w-[445px] opacity-50 text-[15px] leading-[25px]">
          {productArray.description}
        </p>
        <p className="text-[18px] font-bold tracking-[1.29px] pt-[24px] pb-[31px] md:py-[32px] lg:pb-[47px]">
          ${productArray.price.toLocaleString()}
        </p>
        <AddToCart productArray={productArray} />
      </div>
    </div>
  );
}
