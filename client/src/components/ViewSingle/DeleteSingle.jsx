import React from 'react'
import Axios from 'axios';
import { useParams } from 'react-router';
function DeleteSingle() {
  const id = useParams().id;
  const deleteHandler = () => {
    Axios.delete(`http://localhost:3001/api/list/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <button
      type="button"
      onClick={deleteHandler}
      className=" w-96 text-white bg-gradient-to-r from-red-800 to-orange-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2"
    >
      Delete
    </button>
  )
}

export default DeleteSingle