import React, { useState } from 'react'
import ConsList from './ConsList';
import EditIcon from '../../Icons/EditIcon'
function ConBox() {
  const [isEdited, setIsEdited] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const editHandler = () => {
    setIsEdited((prevEdit => !prevEdit));
  }
  const addHandler = () => {
    setIsAdded(true);
  }
  return (
    <div className='flex flex-col bg-red-500 h-full w-1/2 rounded p-5 gap-y-5'>
      <div className="flex justify-center items-center gap-4">
        <h1 className="text-4xl text-white items-start">Cons</h1>
        <EditIcon clicked={editHandler} />
      </div>
      <div className="bg-slate-100 h-full w-full rounded flex justify-center">
        <ConsList edited={isEdited} added={isAdded} />
      </div>
      <button
        type="submit"
        onClick={addHandler}
        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2"
      >
        Add
      </button>
    </div>
  )
}

export default ConBox