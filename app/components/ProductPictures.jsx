export default function ProductPictures({ productArray }) {
  return (
    <div className="pb-[120px] lg:pb-[160px] flex flex-col md:flex-row w-full gap-[20px] md:gap-[18px] lg:gap-[30px]">
      <div className="flex flex-col md:flex-row gap-[20px] lg:gap-[32px]">
        <div className="w-full bg-grey rounded-[8px]">
          <img
            className="h-[592px] w-full object-contain"
            src={productArray?.gallery?.first}
            alt={`first-${productArray.name}`}
          />
        </div>
        <div className="w-full bg-grey rounded-[8px]">
          <img
            className="h-[592px] w-full object-contain"
            src={productArray?.gallery?.second}
            alt={`second-${productArray.name}`}
          />
        </div>
      </div>
    </div>
  );
}
