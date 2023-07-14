export default function Button({ color, text }) {
  return (
    <div
      className={`${color} w-[160px] h-[48px] flex items-center justify-center transition-all`}
    >
      <h2 className="uppercase text-[13px] font-bold text-center tracking-[1px]">
        {text}
      </h2>
    </div>
  );
}