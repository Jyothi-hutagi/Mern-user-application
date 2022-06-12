import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
 const Login=()=> {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const inputHandler=(e)=>{
    e.preventDefault()
    const {name,value}=e.target
    setUser({...user,[name]:value})
}
 const submitHandler=(e)=>{
  e.preventDefault()
  return navigate('/landing')
 }

return(
    <div className="form-v5">
    <div className="page-content">
      <div className="form-v5-content">
        <form className="form-detail"  method="post">
          <h2>Login</h2>
          <div className="form-row">
            <label>Email id</label>
            <input type="email" name="email" id="your-email" className="input-text" placeholder="enter your email id"  onChange={inputHandler}  required />
          
          </div>
        
          <div className="form-row">
            <label >Password</label>
            <input type="password" name="password" id="password" className="input-text" placeholder="enter your Password"  onChange={inputHandler} required />
          
          </div>
          <div className="form-row-last">
            <input type="submit" name="register" className="register" value="Login" onClick={submitHandler} />
          </div>
        </form>
      </div>
    </div>
    </div>
  )
}
export default Login;
