import React,{useState} from 'react'
import './Signup.css'
import validator from 'validator'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
	const navigate = useNavigate();
	const [errorMessage, setErrorMessage] = useState('');
	let passwordErrorMessage = '';
 
  const [user, setUser] = useState({
    email:'',phone:'',password:''
  });
  const validate = (value) => {
	
    if (validator.isStrongPassword(value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorMessage('Strong Password')
	  passwordErrorMessage = 'Strong Password';
    } else {
      setErrorMessage('Password should be contain at least One Uppercase,  One lowercase, One Numeric, Special Character')
	  passwordErrorMessage = 'Password should be contain at least One Uppercase,  One lowercase, One Numeric, Special Character';
	}
  }
  const inputHandler=(e)=>{
    e.preventDefault()
    const {name,value}=e.target
    setUser({...user,[name]:value})
}
  const Postdata= async(e)=>{
	  e.preventDefault();
	  
	  const{email,phone,password}=user;

	  validate(password);

	  if(passwordErrorMessage.trim() === 'Strong Password') {
		
		const res = await fetch("http://localhost:4000/signup",{
			method:"POST",
			headers:{
				"Content-Type":"application/json"
				},
			body:JSON.stringify({
				email,phone,password
			}),
			});

			const data = await res.json();

			if(data.status !== undefined && data.status === 200){
				window.alert("Registration successfull");
				console.log("Successfull Registration");
				navigate('/login')
			} else{
				window.alert("Invalid Registration");
				console.log("invalid registration");
			}
	  }
	  else {
			window.alert(passwordErrorMessage);
			console.log(passwordErrorMessage);
	  }
	}

  return (
    <>
    <div className="form-v5">
	<div className="page-content">
		<div className="form-v5-content">
			<form className="form-detail"  method="post">
				<h2>Sign Up</h2>
        <div className="form-row">
					<label>Email id</label>
					<input type="email" name="email" id="your-email" className="input-text" placeholder="enter your email id"  onChange={inputHandler}  required />
				
				</div>
				<div className="form-row">
					<label >Phone Number</label>
					<input type="phone" name="phone" id="full-name" className="input-text" placeholder="enter your phone number"  onChange={inputHandler}  required />
				
				</div>
			
				<div className="form-row">
					<label >Password</label>
					<input type="password" name="password" id="password" className="input-text" placeholder="enter your Password" onChange={inputHandler} required />
				    {errorMessage === '' ? null :
                    <span style={{fontWeight: 'bold',color: '#3786bd',}}>{errorMessage}</span>}
				</div>
				<div className="form-row-last">
					<input type="submit" name="register" className="register" value="Sign Up" onClick={Postdata}/>
				</div>
			</form>
		</div>
	</div>
	
  </div>


    </>
  )
}

export default Signup



