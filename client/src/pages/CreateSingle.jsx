import React from "react";
import Logo from "../Logo";
import ProSingle from "../components/CreateSingle/ProSingle";
import ConSingle from "../components/CreateSingle/ConSingle";
import Card from '../components/Card';

function CreateSingle() {
  return (
    <Card>
      <div className="flex flex-col h-5/6 w-5/6 bg-slate-400 rounded items-center gap-y-5">
        <h1 className="text-3xl lg:text-5xl text-white font-bold">Create Single</h1>

        <div className="flex h-3/4 w-3/4">
          <ProSingle />
          <ConSingle />
        </div>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2"
        >
          Submit
        </button>
      </div>
    </Card>
  );
}

export default CreateSingle;
