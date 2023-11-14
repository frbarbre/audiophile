export default function ProductPictures({ productArray }) {
  return (
    <div className="pb-[120px] lg:pb-[160px] flex flex-col md:flex-row w-full gap-[20px] md:gap-[18px] lg:gap-[30px]">
      <div className="flex flex-col gap-[20px] lg:gap-[32px]">
        <div className="w-full">
          <img
            className="h-[174px] w-full object-cover rounded-[8px] md:hidden"
            src={productArray.gallery.first.mobile}
            alt={`first-${productArray.name}`}
          />
          <img
            className="h-[174px] w-full object-cover min-w-[277px] rounded-[8px] hidden md:block lg:hidden"
            src={productArray.gallery.first.tablet}
            alt={`first-${productArray.name}`}
          />
          <img
            className="h-[280px] w-full object-cover min-w-[445px] rounded-[8px] hidden lg:block"
            src={productArray.gallery.first.desktop}
            alt={`first-${productArray.name}`}
          />
        </div>
        <div className="w-full">
          <img
            className="h-[174px] w-full object-cover rounded-[8px] md:hidden"
            src={productArray.gallery.second.mobile}
            alt={`second-${productArray.name}`}
          />
          <img
            className="h-[174px] w-full object-cover min-w-[277px] rounded-[8px] hidden md:block lg:hidden"
            src={productArray.gallery.second.tablet}
            alt={`second-${productArray.name}`}
          />
          <img
            className="h-[280px] w-full object-cover min-w-[445px] rounded-[8px] hidden lg:block"
            src={productArray.gallery.second.desktop}
            alt={`second-${productArray.name}`}
          />
        </div>
      </div>
      <div className="w-full">
        <img
          className="h-[368px] w-full object-cover rounded-[8px] md:hidden"
          src={productArray.gallery.third.mobile}
          alt={`third-${productArray.name}`}
        />
        <img
          className="h-[368px] w-full object-cover min-w-[395px] rounded-[8px] hidden md:block lg:hidden"
          src={productArray.gallery.third.tablet}
          alt={`third-${productArray.name}`}
        />
        <img
          className="h-[592px] w-full object-cover min-w-[635px] rounded-[8px] hidden lg:block"
          src={productArray.gallery.third.desktop}
          alt={`third-${productArray.name}`}
        />
      </div>
    </div>
  );
}
