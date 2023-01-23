import React, { useState } from 'react'
import Card from '../components/Card';
import Axios from 'axios';
import { useParams } from "react-router-dom";
import ProsList from '../components/ViewSingle/ProsList';
import ConsList from '../components/ViewSingle/ConsList';
function ViewSingle(props) {
  const [title, setTitle] = useState('');
  const id = useParams().id;
  Axios.get(`http://localhost:3001/api/list/${id}`)
    .then((res) => {
      setTitle(res.data[0].name);
    })
    .catch((err) => {
      console.log(err);
    })

  return (
    <Card>
      <div className="flex flex-col h-1/2 w-1/2 bg-slate-400 rounded items-center gap-y-5">
        <h1 className="text-4xl text-white ">{title}</h1>
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