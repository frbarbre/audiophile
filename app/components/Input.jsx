"use client";

import { useState } from "react";
export default function Input({ text, type, errorMessage, require, name }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  function onChange(e) {
    setValue(e.target.value);
    if (error) {
      if (!value.includes(require)) {
        setError(true);
      } else {
        setError(false);
      }
    }
  }

  function onBlur() {
    console.log(value);
    if (!value.includes(require) || value === "") {
      setError(true);
    } else {
      setError(false);
    }
  }

  return (
    <div className={`w-full ${name === "Your Address" ? "md:w-[634px]" : "md:w-[309px]" }`}>
      <div className="flex justify-between items-center">
        <label
          className="text-[12px] tracking-[-0.21px] block font-bold mb-[9px]"
          htmlFor={name}
        >
          {name}
        </label>
        {error && <p className="text-red text-[12px] font-medium tracking-[-0.21px] mb-[9px]">{errorMessage}</p>}
      </div>
      <input
        className={`${
          error ? "ring-red" : "ring-[#CFCFCF]"
        } ring-[#CFCFCF] font-bold text-[14px] w-full h-[56px] pl-[20px] outline-none ring-[1px] rounded-lg p-[10px]`}
        type={type}
        placeholder={text}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        name={name}
      />
    </div>
  );
}
