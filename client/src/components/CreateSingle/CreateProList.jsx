import React, {useState, useEffect} from 'react'
import Axios from 'axios';
import ConItem from '../ViewSingle/Cons/ConItem';
function CreateProList(props) {
  const [proList, setProList] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    console.log(props.insertID)
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
  }, [])
  return (
    <ul>
      {
        !isEmpty ?
        proList.map((data) => {
            return <ConItem key={data.pros_cons_id} text={data.text} />
          })
          :
          <></>
      }
    </ul>
  )
}

export default CreateProList