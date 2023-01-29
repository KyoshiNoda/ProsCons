import React, { useState } from 'react'
import Axios from 'axios';
import CreateConList from './CreateConList';
function CreateConBox(props) {
  const [isCreated, setIsCreated] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [text, setText] = useState();
  const addHandler = () => {
    setIsAdded(true);
  }
  const textHandler = (event) => {
    setText(event.target.value);
  }
  const blurHandler = () => {
    let conItem = {
      list_id: props.insertID,
      status: 'con',
      text: text,
      user_id: 2
    }
    setIsAdded(preMode => !preMode);
    Axios.post("http://localhost:3001/api/pros-cons/con/", conItem)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
    setIsCreated(true);
  }
  return (
    <div className='flex flex-col bg-red-500 h-full w-1/2 rounded p-5 gap-y-5'>
      <div className="flex justify-center items-center gap-4">
        <h1 className="text-4xl text-white items-start">Cons</h1>
      </div>
      <div className="bg-slate-100 h-full w-full rounded flex justify-center">
        {isCreated && <CreateConList insertID={props.insertID} />}
      </div>
      {
        isAdded ?
          <input
            type='text'
            className='rounded'
            placeholder={'insert item'}
            onChange={textHandler}
            onBlur={blurHandler}
          />
          :
          <button
            type="button"
            onClick={addHandler}
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2"
          >
            Add
          </button>
      }

    </div>
  )
}

export default CreateConBox