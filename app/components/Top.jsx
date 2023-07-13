export default function Top({ pathname }) {
  const split = pathname.split("/");
  const name = split[1];

  return (
    <div className="h-[102px] md:h-[246px] lg:h-[240px] bg-black w-full flex items-center justify-center">
      <h1 className="uppercase text-white text-[28px] tracking-[2px] font-bold md:text-[40px] md:tracking-[1.43px] md:leading-[44px]">
        {name}
      </h1>
    </div>
  );
}
