import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import Axios from 'axios';
import EditConItem from './EditConItem';
function EditConList() {
  const id = useParams().id;
  const [conList, setConList] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  useEffect(() => {
    Axios.get(`http://localhost:3001/api/pro-cons/con/${id}`)
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
    <ul>
      {
        conList.map((data) => {
          return <EditConItem key={data.pros_cons_id} text={data.text} id={data.pros_cons_id} />
        })
      }
    </ul>
  )
}

export default EditConList