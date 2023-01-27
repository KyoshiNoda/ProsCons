import React, { useState } from 'react'
import Axios from 'axios';
function EditProItem(props) {
  const [text, setText] = useState();
  const inputHandler = (event) => {
    setText(event.target.value);
  }
  const blurHandler = () => {
    Axios.put(`http://localhost:3001/api/pro-cons/pro/${props.id}`, { text: text })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <li>
      <input
        type='text'
        className='rounded'
        placeholder={props.text}
        onChange={inputHandler}
        onBlur={blurHandler}
      />
    </li>
  )
}

export default EditProItem