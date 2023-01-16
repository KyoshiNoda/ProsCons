import React, { useState } from "react";

function ProSingle() {
  const [input, setInput] = useState("");
  const inputHandler = (event) => {
    setInput(event.target.value);
    console.log(input);
  }
  return (
    <div className="flex flex-col bg-green-500 h-full w-1/2 rounded p-5 gap-y-5">
      <div className="text-center">
        <h1 className="text-4xl text-white items-start">Pros</h1>
      </div>
      <div className="bg-slate-100 h-full w-full rounded"></div>
      <div className="flex justify-center">
        <input type="text" value={input} onChange={inputHandler} />
      </div>

    </div>
  );
}

export default ProSingle;
