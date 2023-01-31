import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import Axios from 'axios';
import EditIcon from '../Icons/EditIcon';
function ViewTitleContainer() {
  const [title, setTitle] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const id = useParams().id;
  useEffect(() => {
    Axios.get(`http://localhost:3001/api/list/${id}`)
      .then((res) => {
        setTitle(res.data[0].name);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  const titleHandler = (event) => {
    setTitle(event.target.value);
  }
  const blurHandler = () => {
    setIsFocused(preMode => !preMode);
    Axios.put(`http://localhost:3001/api/list/${id}`, { title: title })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <div className='flex justify-center gap-2 items-center m-2'>
      {
        isFocused ?
          <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 m-2'
            type='text'
            placeholder={title}
            onBlur={blurHandler}
            onChange={titleHandler}
          />
          :
          <h1 className="text-4xl text-white ">{title}</h1>
      }
      <EditIcon clicked={() => {
        setIsFocused(preMode => !preMode);
      }}
      />
    </div>
  )
}

export default ViewTitleContainer