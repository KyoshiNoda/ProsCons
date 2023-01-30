import React,{useState,useEffect} from 'react'
import Axios from 'axios';
import { useParams } from 'react-router';
import DeleteModal from '../Modals/DeleteModal';
function DeleteSingle() {
  const id = useParams().id;
  const [name,setName] = useState();
  useEffect(() =>{
    Axios.get(`http://localhost:3001/api/list/${id}`)
    .then((res) =>{
      setName(res.data[0].name);
    })
    .catch((err) =>{
      console.log(err);
    })
  },[])
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
    <DeleteModal onClick = {deleteHandler} name = {name}/>
  )
}

export default DeleteSingle