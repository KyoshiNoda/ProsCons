import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import ConItem from '../ViewSingle/Cons/ConItem';
function CreateConList(props) {
  const [conList, setConList] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:3001/api/pros-cons/con/${props.insertID}`)
      .then((res) => {
        if (typeof res.data === 'string' || res.data instanceof String) {
          setIsEmpty(true);
        }
        setConList(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [conList])
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

export default CreateConList