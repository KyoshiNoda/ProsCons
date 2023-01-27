import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import Axios from 'axios';
import EditIcon from '../Icons/EditIcon';
function CreateTitleContainer() {
  const [name, setName] = useState('Untitled');
  const [isFocused, setIsFocused] = useState(false);
  const id = useParams().id;
  const nameHandler = (event) => {
    setName(event.target.value);
  }
  const blurHandler = () => {
    setIsFocused(preMode => !preMode);
    Axios.post(`http://localhost:3001/api/list/`, { name: name })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <div className='flex justify-center gap-4 items-center space-y-3'>
      {
        isFocused ?
          <input className='rounded'
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