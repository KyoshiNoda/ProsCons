import React, { useState } from "react";
import Card from '../components/Card';
import CreateTitleContainer from "../components/CreateSingle/CreateTitleContainer";
import CreateProBox from "../components/CreateSingle/CreateProBox";
import CreateConBox from "../components/CreateSingle/CreateConBox";
import CreateSingleModal from "../components/Modals/CreateSingleModal";
function CreateSingle() {
  const [insertID, setInsertID] = useState();
  const [name,setName] = useState();
  const getInsertID = (id) => {
    setInsertID(id);
  }
  const sendNameHandler = (name) =>{
    setName(name);
  }
  return (
    <Card>
      <div className="flex flex-col h-5/6 w-5/6 bg-slate-400 rounded items-center gap-y-5">
        <div className="flex items-center gap-4 text-sm">
          <CreateTitleContainer insertID={getInsertID} sendName ={sendNameHandler}/>
        </div>
        <div className="flex h-3/4 w-3/4">
          <CreateProBox insertID={insertID} />
          <CreateConBox insertID={insertID} />
        </div>
        <CreateSingleModal name = {name} insertID = {insertID}/>
      </div>
    </Card>
  );
}

export default CreateSingle;
