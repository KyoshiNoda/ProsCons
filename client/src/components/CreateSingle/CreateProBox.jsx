import React,{useState} from 'react'
import ProsList from '../ViewSingle/Pros/ProsList';
import EditIcon from '../Icons/EditIcon';
import Axios from 'axios';
import { useParams } from 'react-router';
function CreateProBox() {
  const id = useParams().id;
  const [isEdited, setIsEdited] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [text, setText] = useState();
  const editHandler = () => {
    setIsEdited((prevEdit => !prevEdit));
  }
  const addHandler = () => {
    setIsAdded(true);
  }
  const textHandler = (event) => {
    setText(event.target.value);
  }
  const blurHandler = () => {
    let proItem = {
      list_id: id,
      status: 'pro',
      text: text,
      user_id: 2
    }
    setIsAdded(preMode => !preMode);
    Axios.post("http://localhost:3001/api/pros-cons/pro/", proItem)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      Axios.get(`http://localhost:3001/api/pros-cons/pro/${id}`)
      .then((res) =>{
        console.log(res);
      })
      .catch((err) =>{
        console.log(err);
      })
  }
  return (
    <div className='flex flex-col bg-green-500 h-full w-1/2 rounded p-5 gap-y-5'>
      <div className="flex justify-center gap-4 item-center">
        <h1 className="text-4xl text-white items-start">Pros</h1>
      </div>
      <div className="bg-slate-100 h-full w-full rounded flex justify-center">
        <ProsList edited={isEdited} added={isAdded} />
      </div>
      {
        isAdded ?
          <input
            type='text'
            className='rounded'
            placeholder={'insert item'}
            onChange={textHandler}
            onBlur={blurHandler}
          />
          :
          <button
            type="button"
            onClick={addHandler}
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2"
          >
            Add
          </button>
      }
    </div>
  )
}

export default CreateProBox