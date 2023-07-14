"use client";

import Input from "../components/Input";
import { nanoid } from "nanoid";
import {
  billingDetails,
  shippingInfo,
  eMoney,
  radioButtons,
} from "../constants";
import Radio from "./Radio";
import { useState } from "react";

export default function CheckoutForm() {
  const [payMethod, setPayMethod] = useState("emoney");

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full max-w-[800px] lg:max-w-[730px]"
    >
      <div className="bg-white rounded-lg w-full px-6 md:px-[27.5px] lg:px-[48px]">
        <h2 className="font-bold pt-[24px] md:pt-[30px] lg:pt-[58px] text-[28px]">
          CHECKOUT
        </h2>
        <p className="text-orange font-bold mt-[32px] md:mt-[41px] mb-[16px]">
          BILLING DETAILS
        </p>
        <div className="flex flex-wrap gap-x-[16px] gap-y-[17px]">
          {billingDetails.map((bd) => (
            <div key={nanoid()} className="w-full md:w-max">
              <Input
                text={bd.placeholder}
                type={bd.type}
                errorMessage={bd.errorMessage}
                require={bd.requirements}
                name={bd.name}
                valid={bd.required}
              />
            </div>
          ))}
        </div>
        <p className="text-orange font-bold md:mt-[53px] mt-[32px] mb-[16px]">
          SHIPPING INFO
        </p>
        <div className="flex flex-wrap gap-x-[16px] gap-y-[24px]">
          {shippingInfo.map((si) => (
            <div key={nanoid()} className="w-full md:w-max">
              <Input
                text={si.placeholder}
                type={si.type}
                errorMessage={si.errorMessage}
                require={si.requirements}
                name={si.name}
              />
            </div>
          ))}
        </div>

        <p className="text-orange font-bold md:mt-[53px] mt-[32px] mb-[16px]">
          PAYMENT DETAILS
        </p>
        <div className="flex flex-col md:flex-row md:justify-between max-w-[634px]">
          <div>
            <p className="text-[12px] tracking-[-0.21px] block font-bold mb-[9px]">
              Payment Method
            </p>
          </div>
          <div className="pb-[30px] flex flex-col gap-[16px]">
            {radioButtons.map((radio) => (
              <Radio
                id={radio.id}
                name={radio.name}
                setPayMethod={setPayMethod}
                payMethod={payMethod}
                key={nanoid()}
              />
            ))}
          </div>
        </div>
        {payMethod === "emoney" && (
          <div className="flex flex-wrap gap-x-[16px] gap-y-[24px] pb-[30px] lg:pb-[48px]">
            {eMoney.map((em) => (
              <div key={nanoid()} className="w-full md:w-max">
                <Input
                  text={em.placeholder}
                  type={em.type}
                  errorMessage={em.errorMessage}
                  require={em.requirements}
                  name={em.name}
                />
              </div>
            ))}
          </div>
        )}
        {payMethod === "cash" && (
          <div className="flex flex-col md:flex-row items-center pb-[30px] lg:pb-[48px] gap-[32px]">
            <img src="/checkout/icon-cash-on-delivery.svg" alt="" />
            <p className="text-[15px] opacity-50 font-medium leading-[25px] max-w-[554px]">
              The ‘Cash on Delivery’ option enables you to pay in cash when our
              delivery courier arrives at your residence. Just make sure your
              address is correct so that your order will not be cancelled.
            </p>
          </div>
        )}
      </div>
    </form>
  );
}
