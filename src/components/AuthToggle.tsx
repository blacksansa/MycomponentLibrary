"use client";
import { useState, useEffect } from "react";
import MobileLoginCard from "@/components/MobileLoginCard";
import MobileRegisterCard from "@/components/MobileRegisterCard";

export default function AuthToggle() {
  const [current, setCurrent] = useState("Cadastro");
  const [loginStyle, setLoginStyle] = useState("");
  const [registerStyle, setRegisterStyle] = useState("bg-gray-500");

  function toLogin() {
    setCurrent("Login");
  }

  function toRegister() {
    setCurrent("Cadastro");
  }

  useEffect(() => {
    if (current === "Login") {
      setLoginStyle("bg-gray-500");
      setRegisterStyle("");
    } else {
      setLoginStyle("");
      setRegisterStyle("bg-gray-500");
    }
  }, [current]);

  return (
    <div className="flex items-center flex-col h-screen bg-stone-950 text-white">
      {current === "Cadastro" ? (
        <div className="mt-10 text-left w-11/12">
          <h1 className="text-4xl">
            <b>Bem vindo a bordo!</b>
          </h1>
          <div className="text-lg">Vamos começar.</div>
        </div>
      ) : (
        <div className="mt-10 w-11/12">
          <h1 className="text-4xl">
            <b>Bem vindo de volta</b>
          </h1>
          <div className="text-lg">Entre e aproveite!</div>
        </div>
      )}
      <div className="flex items-center justify-between w-80 h-10 mt-10 rounded-lg border border-gray-500  ">
        <div
          className={`text-center leading-9 h-full w-1/2 rounded-md ${loginStyle}`}
          onClick={toLogin}
        >
          Login
        </div>
        <div
          className={`text-center leading-9  h-full w-1/2  rounded-md  ${registerStyle}`}
          onClick={toRegister}
        >
          Cadastro
        </div>
      </div>
      <div className="w-full h-full ">
        {current === "Cadastro" ? <MobileRegisterCard /> : <MobileLoginCard />}
      </div>
    </div>
  );
}
