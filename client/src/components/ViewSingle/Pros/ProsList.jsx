import React, { useState } from 'react'
import Axios from 'axios';
import { useParams } from 'react-router';
import ProItem from './ProItem';
function ProsList(props) {
  const id = useParams().id;
  const [proList, setProList] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  Axios.get(`http://localhost:3001/api/pro-cons/pro/${id}`)
    .then((res) => {
      if (typeof res.data === 'string' || res.data instanceof String) {
        setIsEmpty(true);
      }
      setProList(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  return (
    <ul>
      {
        !isEmpty ?
          proList.map((data) => {
            return <ProItem key={data.pros_cons_id} text={data.text} />
          })
          :
          <></>
      }
    </ul>
  )
}

export default ProsList