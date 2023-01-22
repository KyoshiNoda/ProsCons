import React, { useState } from "react";
import ProSingle from "../components/CreateSingle/ProSingle";
import ConSingle from "../components/CreateSingle/ConSingle";
import Card from '../components/Card';
import EditIcon from "../components/Icons/EditIcon";
const formHandler = (event) => {
  event.preventDefault();
  console.log('submitted');
};
const textHandler = () => {
  console.log("hello");
}

const titleHandler = (event) => {
  setTitle(event.target.value);
}
const clickHandler = () => {
  setClickedTitle(true);
}
function CreateSingle() {
  const [title, setTitle] = useState('Untitled');
  const [clickedTitle, setClickedTitle] = useState(false);
  return (
    <form onSubmit={formHandler}>
      <Card>
        <div className="flex flex-col h-5/6 w-5/6 bg-slate-400 rounded items-center gap-y-5">
          <div className="flex items-center gap-4 text-sm">
            <h1 className="text-3xl lg:text-5xl text-white font-bold">
              {!clickedTitle ? title : <input onChange={titleHandler} type='text' />}
            </h1>
            <EditIcon clicked={clickHandler} />
          </div>

          <div className="flex h-3/4 w-3/4">
            <ProSingle text={textHandler} />
            <ConSingle text={textHandler} />
          </div>
          <button
            type="submit"
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2"
          >
            Create Single
          </button>
        </div>
      </Card>
    </form>
  );
}

export default CreateSingle;
