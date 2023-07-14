"use client";

import CheckoutForm from "./CheckoutForm";
import CheckoutSummary from "./CheckoutSummary";
import GoBack from "./GoBack";
import SuccesBanner from "./SuccesBanner";
import { useStore } from "../store";

export default function CheckoutPage() {
  const succes = useStore((store) => store.succes);

  return (
    <div className="bg-li-gray">
      <div className="max-w-[1174px] mx-auto px-8">
        <GoBack />
        <div className="flex flex-col lg:flex-row items-start gap-[32px] lg:gap-[30px] pb-[97px] md:pb-[116px] lg:pb-[141px]">
          <CheckoutForm />
          <CheckoutSummary />
        </div>
      </div>
      {succes && <SuccesBanner />}
    </div>
  );
}
