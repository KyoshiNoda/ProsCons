import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { useParams } from 'react-router';
import ProItem from './ProItem';
function RenderProList() {
  const id = useParams().id;
  const [proList, setProList] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    Axios.get(`http://localhost:3001/api/pros-cons/pro/${id}`)
      .then((res) => {
        if (typeof res.data === 'string' || res.data instanceof String) {
          setIsEmpty(true);
        }
        setProList(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <ul className='flex flex-col gap-1'>
      {
        !isEmpty ?
          proList.map((data) => {
            return <ProItem key={data.pros_cons_id} text={data.text} id={data.pros_cons_id} />
          })
          :
          <></>
      }
    </ul>
  )
}

export default RenderProList