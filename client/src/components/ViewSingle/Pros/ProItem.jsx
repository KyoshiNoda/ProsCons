import React from 'react'
import DeleteIcon from '../../Icons/DeleteIcon';
import Axios from 'axios';
function ProItem(props) {
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

export default ProItem