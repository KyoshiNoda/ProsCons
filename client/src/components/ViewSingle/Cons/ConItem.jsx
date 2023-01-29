import React from 'react'
import Axios from 'axios';
import DeleteIcon from '../../Icons/DeleteIcon';
function ConItem(props) {
  const deleteHandler = () => {
    Axios.delete(`http://localhost:3001/api/pros-cons/pro/${props.id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <div className='flex justify-center items-center gap-1'>
      <div>
        <li>- {props.text}</li>
      </div>
      <DeleteIcon clicked={deleteHandler} />
    </div>
  )
}

export default ConItem