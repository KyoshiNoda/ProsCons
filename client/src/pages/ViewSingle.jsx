import React, { useState } from 'react'
import Card from '../components/Card';
import Axios from 'axios';
import { useParams } from "react-router-dom";
import ProsList from '../components/ViewSingle/Pros/ProsList';
import ConsList from '../components/ViewSingle/Cons/ConsList';
import EditIcon from '../components/Icons/EditIcon';
function ViewSingle(props) {
  const [title, setTitle] = useState('');
  const [newTitle,setNewTitle ] = useState();
  const [isFocused, setIsFocused] = useState(false);
  const id = useParams().id;
  Axios.get(`http://localhost:3001/api/list/${id}`)
    .then((res) => {
      setTitle(res.data[0].name); // this is causing a re render every time you try to change the value
    })
    .catch((err) => {
      console.log(err);
    })

  const titleHandler = (event) => {
    setNewTitle(event.target.value);
  }
  const focusHandler = () => {
    setIsFocused(preMode => !preMode);
  }



  return (
    <Card>
      <div className="flex flex-col h-1/2 w-1/2 bg-slate-400 rounded items-center gap-y-5">
        <div className='flex justify-center gap-4 items-center space-y-3'>
          
          {
            isFocused ?
              <input className='rounded'
                type='text'
                placeholder={title}
                onBlur={focusHandler}
                onChange={titleHandler}
              />
              :
              <h1 className="text-4xl text-white ">{newTitle}</h1>
          }

          <EditIcon clicked={focusHandler} />
        </div>

        <div className="flex h-3/4 w-3/4">
          <div className='flex flex-col bg-green-500 h-full w-1/2 rounded p-5 gap-y-5'>
            <div className="text-center">
              <h1 className="text-4xl text-white items-start">Pros</h1>
            </div>
            <div className="bg-slate-100 h-full w-full rounded flex justify-center">
              <ProsList />
            </div>
          </div>

          <div className='flex flex-col bg-red-500 h-full w-1/2 rounded p-5 gap-y-5'>
            <div className="text-center">
              <h1 className="text-4xl text-white items-start">Cons</h1>
            </div>
            <div className="bg-slate-100 h-full w-full rounded flex justify-center">
              <ConsList />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ViewSingle;