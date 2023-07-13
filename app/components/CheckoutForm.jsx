"use client";

import Input from "../components/Input";
import GoBack from "../components/GoBack";
import { nanoid } from "nanoid";
import { billingDetails, shippingInfo } from "../constants";

export default function CheckoutForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <GoBack />
      <div className="bg-white rounded-lg w-[100%] px-6">
        <h2 className="font-bold pt-[24px] text-[28px]">CHECKOUT</h2>
        <p className="text-orange font-bold mt-[32px] mb-[16px]">
          BILLING DETAILS
        </p>
        {billingDetails.map((bd) => (
          <div key={nanoid()}>
            <Input
              text={bd.placeholder}
              type={bd.type}
              errorMessage={bd.errorMessage}
              require={bd.requirements}
              name={bd.name}
            />
          </div>
        ))}
        <p className="text-orange font-bold mt-[32px] mb-[16px]">
          SHIPPING INFO
        </p>
        {shippingInfo.map((si) => (
          <div key={nanoid()}>
            <Input
              text={si.placeholder}
              type={si.type}
              errorMessage={si.errorMessage}
              require={si.requirements}
              name={si.name}
            />
          </div>
        ))}

        <p className="text-orange font-bold mt-[32px] mb-[16px]">
          PAYMENT DETAILS
        </p>
      </div>
      <button type="submit">submit</button>
    </form>
  );
}
