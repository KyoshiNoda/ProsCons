import React,{useState} from "react";
import Axios from 'axios';
function SignUp() {
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();


  const emailHandler = (event) => { setEmail(event.target.value); }
  const passwordHandler = (event) => { setPassword(event.target.value); }
  
  const formHandler = (event) =>{
    event.preventDefault();
    Axios.post('http://localhost:3001/api/accounts',{email : email, password : password })
    .then((res) =>{
      console.log(res);
    })
    .catch((err) =>{
      console.log(err);
    })

  }

  return (
    <form onSubmit={formHandler}>
      <div className=" bg-slate-500 flex-col">
        <div>
          <label htmlFor="email">Email</label>
          <input type = 'email' onChange={emailHandler}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type = 'password' onChange={passwordHandler}/>
        </div>
      </div>
      <button type = 'submit' className = 'bg-red-500 rounded'>submit me</button>
    </form>
  );
}

export default SignUp;
