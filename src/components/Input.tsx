"use client";
// This input field is made to be flexible to a lot a types of situations

//Imports
import { ChangeEvent, useState } from "react";
import passwordStore from "@/state/register";
import isInputValid from "@/lib/isInputValid";

//@ts-ignore
export default function Input({ value, setValue, firstPassword }) {
  const [isValid, setIsValid] = useState(false);
  const [borderColor, setBorderColor] = useState("border-gray-300");

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
    setIsValid(isInputIsValid(value, e.target.value));

    if (firstPassword === e.target.value && isValid) {
      setBorderColor("border-green-300");
    } else if (!firstPassword && isValid) {
      setBorderColor("border-green-300");
    } else {
      setBorderColor("border-red-300");
    }
  };
  return (
    <>
      <input
        type={value}
        className={`border-2 text-center rounded-full border-solid p-2 outline-none ${borderColor} focus:outline-none`}
        onChange={(e) => changeHandler(e)}
      />
    </>
  );
}
