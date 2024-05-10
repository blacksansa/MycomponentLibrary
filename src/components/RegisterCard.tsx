"use client";
import Input from "@/components/Input";
import { useState, useEffect } from "react";

export default function RegisterCard() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [passwordMatcher, setPasswordMatcher] = useState("notPassword");
  const [buttonColor, setButtonColor] = useState("");

  useEffect(() => {
    //@ts-ignore
    if (confirmPassword === undefined) {
      setButtonColor("bg-gray-700");
    } else if (confirmPassword === password && confirmPassword !== undefined) {
      console.log(confirmPassword);
      setPasswordMatcher("match");
      setButtonColor("bg-sky-800");
    } else if (password !== confirmPassword) {
      setPasswordMatcher("unmatch");
      setButtonColor("bg-gray-700");
    }
  }, [confirmPassword]);

  return (
    <>
      <div className="w-screen h-screen bg-sky-900 flex items-center justify-center">
        <div className="w-full h-full shadow-md shadow-sky-300 md:w-[510px]  md:h-[690px] bg-white rounded-xl flex items-center justify-center flex-col">
          <div className="text-4xl mt-10">
            <b>Crie sua conta</b>
          </div>
          <div className="text-gray-600 mt-2">
            Já tem um conta? <span className="text-sky-600">Entre aqui</span>
          </div>
          <div className="h-5/6 w-5/6 p-10 text-lg flex flex-col">
            <div>Email</div>
            <Input value="email" setValue={setEmail} />
            <div className="mt-10">Password</div>
            <Input value="password" setValue={setPassword} />
            <span className="p-2 text-xs text-gray-400 mb-2">
              A senha deve conter no minimo 8 digitos e conter um simbolo #@!$
            </span>
            <div>Confirm Password</div>
            <Input
              value="password"
              setValue={setConfirmPassword}
              firstPassword={password}
            />
            {passwordMatcher === "unmatch" && (
              <span className="p-2 text-sm text-red-400">
                Senhas não conferem
              </span>
            )}
            <button
              type="submit"
              className={`${buttonColor} rounded-full text-white p-1 mt-20`}
            >
              Crie sua conta
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
