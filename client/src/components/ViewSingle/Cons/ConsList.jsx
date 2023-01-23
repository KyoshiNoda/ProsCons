import React, { useState } from 'react';
import Axios from 'axios';
import ConItem from './ConItem';
import { useParams } from "react-router-dom";
function ConsList() {
  const id = useParams().id;
  const [conList, setConList] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  Axios.get(`http://localhost:3001/api/pro-cons/con/${id}`)
    .then((res) => {
      if (res.data.length === 0) {
        setIsEmpty(true);
      }
      setConList(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  return (
    <ul>
      {
        !isEmpty ?
          conList.map((data) => {
            return <ConItem key={data.pros_cons_id} text={data.text} />
          })
          :
          <></>
      }
    </ul>
  )
}

export default ConsList