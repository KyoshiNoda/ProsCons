import React, { useState } from 'react';
import Axios from 'axios';
import ConItem from './ConItem';
import { useParams } from "react-router-dom";
function ConsList() {
  const id = useParams().id;
  const [conList, setConList] = useState([]);
  Axios.get(`http://localhost:3001/api/pro-cons/con/${id}`)
    .then((res) => {
      setConList(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  return (
    <ul>
      {
        conList.map((data) => {
          return <ConItem key={data.pros_cons_id} text={data.text} />
        })
      }
    </ul>
  )
}

export default ConsList