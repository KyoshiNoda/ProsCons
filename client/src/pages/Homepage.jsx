import React from "react";
import CreateModal from "../components/Modals/CreateModal";
import ViewModal from '../components/Modals/ViewModal';
function Homepage() {
  return (
    <div className="flex flex-col justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="flex justify-center">
        <h1 className="text-white text-6xl font-bold">Pros Cons Generator</h1>
      </div>
      <div className="flex justify-evenly items-center h-screen w-screen">
        <CreateModal />
        <ViewModal />
      </div>
    </div>
  );
}

export default Homepage;
