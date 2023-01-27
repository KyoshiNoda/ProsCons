import React, { useState, useEffect } from 'react'
import EditProItem from './EditProItem';
import { useParams } from 'react-router';
import Axios from 'axios';
function EditProList() {
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
    <ul>
      {
        !isEmpty ?
          proList.map((data) => {
            return <EditProItem key={data.pros_cons_id} text={data.text} id={data.pros_cons_id} />
          })
          :
          <></>
      }
    </ul>
  );
}
export default EditProList