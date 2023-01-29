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
          <CreateConBox insertID={insertID} />
        </div>
      </div>
    </Card>
  );
}

export default CreateSingle;
