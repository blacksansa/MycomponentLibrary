"use client"

import { useState } from "react"
import { client } from "@/mongo/mongo"

export default function Enquete() {

  const [isClicked, setIsClicked] = useState("not-set")
  const handleClick1 = () => { client.connect() }
  const handleClick2 = () => { setIsClicked("button-2") }

  return (
    <>

      {isClicked === "not-set" && <div>Button not set</div>}
      {isClicked === "button-1" && <div>Button 1 is clicked</div>}
      {isClicked === "button-2" && <div>Button 2 is clicked</div>}

      <div className="w-screen h-screen flex flex-row justify-center items-center">
        <div className="w-4/6 flex space-between">
          <button className="w-1/2 p-4 bg-red-300 rounded-l-full" onClick={handleClick1}>Vote X</button>
          <button className="w-1/2 p-4 bg-red-300 border-l border-solid rounded-r-full" onClick={handleClick2}>Vote Y</button>
        </div>
      </div>

    </>
  )
}
