import { useState, useEffect } from "react";
import isInputValid from "../lib/inputValidations";

function setInputColor(parameter,setParameter) {
  switch (parameter) {
    case "":
      setParameter("border-gray-400")
      break;

    case true:
      setParameter("border-green-400")
      break;

    case false:
      setParameter("border-red-400")
      break;
  }
}

export default function MobileRegistercard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [confirmationStyle, setConfirmationStyle]                        = useState("");
  const [confirmationPasswordStyle, setConfirmationPassword]             = useState("");
  const [confirmationSecondPasswordStyle, setConfirmationSecondPassword] = useState("");

  useEffect(() => {

    if (email === "") {
      setInputColor(email,setConfirmationStyle)
    } else {
      const isEmailValid = isInputValid("email", email)
      setInputColor(isEmailValid, setConfirmationStyle)
    }
    
    if (password === "") {
      setInputColor(password,setConfirmationPassword)
    } else {
      const isPasswordValid = isInputValid("password", password)
      setInputColor(isPasswordValid, setConfirmationPassword)
    }

    if (secondPassword === "") {
      setInputColor(secondPassword,setConfirmationSecondPassword)
    } else if (password === secondPassword) {
      setInputColor(true, setConfirmationSecondPassword)
    } else {
      setInputColor(false, setConfirmationSecondPassword)
    }

  })

  return (
    <div className="w-full h-full ">
      <div className="flex justify-center items-center h-full ">
        <form className="w-11/12 h-10/12  h-full flex  flex-col">
          <label className="text-lg mt-10 mb-4">
            <b>Email</b>
          </label>
          <input
            placeholder="example@email.com"
            type="email"
            className={`bg-stone-950 border  p-2 outline-none rounded-lg ${confirmationStyle}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="text-lg mt-6 mb-4">
            <b>Password</b>
          </label>
          <input
            placeholder="Digite sua senha"
            type="password"
            className={`bg-stone-950 border p-2 outline-none rounded-lg ${confirmationPasswordStyle}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label className="text-lg mt-6 mb-4">
            <b>Confirm password</b>
          </label>
          <input
            placeholder="Digite sua senha"
            type="password"
            className={`bg-stone-950 border p-2 outline-none rounded-lg ${confirmationSecondPasswordStyle}`}
            value={secondPassword}
            onChange={(e) => setSecondPassword(e.target.value)}
          />

          <button type="submit" className="bg-gray-500 rounded-lg p-2 mt-20">
            Criar conta
          </button>
        </form>
      </div>
    </div>
  );
}
