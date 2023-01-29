import React, { useState } from "react";
import Card from '../components/Card';
import CreateTitleContainer from "../components/CreateSingle/CreateTitleContainer";
import CreateProBox from "../components/CreateSingle/CreateProBox";
import CreateConBox from "../components/CreateSingle/CreateConBox";
function CreateSingle() {
  const [insertID, setInsertID] = useState();
  const getInsertID = (id) => {
    setInsertID(id);
  }
  return (
    <Card>
      <div className="flex flex-col h-5/6 w-5/6 bg-slate-400 rounded items-center gap-y-5">
        <div className="flex items-center gap-4 text-sm">
          <CreateTitleContainer insertID={getInsertID} />
        </div>
        <div className="flex h-3/4 w-3/4">
          <CreateProBox insertID={insertID} />
          {/* <CreateConBox /> */}
        </div>
        <button
          type="submit"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2"
        >
          Create Single
        </button>
      </div>
    </Card>
  );
}

export default CreateSingle;
