import React, { useState } from "react";

function ConSingle() {
  const [input, setInput] = useState("");
  const inputHandler = (event) => {
    setInput(event.target.value);
    console.log(input);
  };
  return (
    <div className="flex flex-col bg-red-500 h-full w-1/2 rounded p-5 gap-y-5">
      <div className="text-center">
        <h1 className="text-4xl text-white items-start">Cons</h1>
      </div>
      <div className="bg-slate-100 h-full w-full rounded"></div>
      <div className="flex justify-center">
        <input type="text" value={input} onChange={inputHandler} />
      </div>
    </div>
  );
}

export default ConSingle;
