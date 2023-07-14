export default function Radio({ name, id, setPayMethod, payMethod }) {
  return (
    <div
      onClick={() => setPayMethod(id)}
      className={`flex gap-[16px] items-center px-[16px] w-full md:w-[309px] h-[56px] border-[1px] border-solid rounded-[8px] ${
        payMethod === id ? "border-orange" : "border-[#CECECE]"
      }`}
    >
      <div className="w-[20px] h-[20px] rounded-full border-solid border-[1px] border-[#CFCECF] flex items-center justify-center">
        {payMethod === id && (
          <div className="bg-orange h-[10px] w-[10px] rounded-full aspect-square" />
        )}
      </div>
      <p className="font-bold text-[14px] tracking-[-0.25px]">{name}</p>
    </div>
  );
}
