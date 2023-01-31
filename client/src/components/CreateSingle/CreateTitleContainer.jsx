import React, { useState } from 'react'
import Axios from 'axios';
import EditIcon from '../Icons/EditIcon';
function CreateTitleContainer(props) {
  const [name, setName] = useState('Untitled');
  const [isFocused, setIsFocused] = useState(false);
  const nameHandler = (event) => {
    setName(event.target.value);
  }
  const blurHandler = () => {
    setIsFocused(preMode => !preMode);
    Axios.post(`http://localhost:3001/api/list/`, { name: name })
      .then((res) => {
        props.insertID(res.data.insertId);
        props.sendName(name);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <div className='flex justify-center gap-1 items-center m-2'>
      {
        isFocused ?
          <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 m-2'
            type='text'
            placeholder={name}
            onBlur={blurHandler}
            onChange={nameHandler}
          />
          :
          <h1 className="text-4xl text-white ">{name}</h1>
      }
      <EditIcon clicked={() => {
        setIsFocused(preMode => !preMode);
      }}
      />
    </div>
  )
}

export default CreateTitleContainer