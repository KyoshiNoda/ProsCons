import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { useParams } from 'react-router';
import ConItem from './ConItem';
function RenderConList() {
  const id = useParams().id;
  const [conList, setConList] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    Axios.get(`http://localhost:3001/api/pros-cons/con/${id}`)
      .then((res) => {
        if (typeof res.data === 'string' || res.data instanceof String) {
          setIsEmpty(true);
        }
        setConList(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <ul className='flex flex-col gap-1'>
      {
        !isEmpty ?
          conList.map((data) => {
            return <ConItem key={data.pros_cons_id} text={data.text} id={data.pros_cons_id} />
          })
          :
          <></>
      }
    </ul>
  )
}

export default RenderConList