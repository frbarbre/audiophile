export default function CheckoutItem({
  shortName,
  cartImage,
  price,
  quantity,
}) {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-[16px]">
        <img className="w-[64px] aspect-square rounded-[8px]" src={cartImage} alt={`${shortName}-photo`} />
        <div className="flex flex-col">
          <h2 className="font-bold text-[15px] leading-[25px]">{shortName}</h2>
          <h3 className="font-bold opacity-50 text-[14px] leading-[25px]">$ {price.toLocaleString()}</h3>
        </div>
      </div>
      <p className="pt-[7px] font-bold opacity-50 text-[15px] leading-[25px]">x{quantity}</p>
    </div>
  );
}
