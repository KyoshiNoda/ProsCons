import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import ProItem from '../ViewSingle/Pros/ProItem';
function CreateProList(props) {

  const [proList, setProList] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:3001/api/pros-cons/pro/${props.insertID}`)
      .then((res) => {
        if (typeof res.data === 'string' || res.data instanceof String) {
          setIsEmpty(true);
        }
        setProList(res.data);
      })
      .catch((err) => {
        console.log(err);
      })

  }, [proList])

  return (
    <ul>
      {
        proList.map((data) => {
          return <ProItem key={data.pros_cons_id} text={data.text} />
        })

      }
    </ul>
  )
}

export default CreateProList