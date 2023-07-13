import AddToCart from "./AddToCart";

export default function Overview({ productArray }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center w-full gap-[40px] md:gap-[69px] lg:gap-[124.5px]">
      <div className="w-full">
        <div className="bg-grey w-full flex justify-center rounded-[8px]">
          <img
            className="rounded-[8px] md:hidden h-[327px] w-full max-w-[450px] object-cover"
            src={productArray.image.mobile}
            alt={productArray.shortName}
          />
        </div>
        <div className="w-full flex justify-center bg-grey rounded-[8px]">
          <img
            className="rounded-[8px] hidden md:block lg:hidden h-[480px] w-full max-w-[381px] object-cover"
            src={productArray.image.tablet}
            alt={productArray.shortName}
          />
        </div>
        <img
          className="rounded-[8px] hidden lg:block h-[560px] max-w-[540px] object-cover"
          src={productArray.image.desktop}
          alt={productArray.shortName}
        />
      </div>
      <div className="md:w-max">
        {productArray.new && (
          <h3 className="text-orange text-[14px] tracking-[10px] uppercase pb-[24px] md:pb-[17px] lg:pb-[16px]">
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
