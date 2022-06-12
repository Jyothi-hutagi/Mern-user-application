import e from 'cors';
import React,{useState} from 'react'
import './Candidatepage.css'
import { useNavigate } from 'react-router-dom';
const Candidatepage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [add, setAdd] = useState('');
  const [dob, setDob] = useState('');
  const [state, setSate] = useState('');
  const [age, setAge] = useState('');
  const [pin, setPin] = useState('');
  const [user, setUser] = useState({
    name:'',add:'',dob:'',state:'',age:'',pin:''
  });
  
  const handleSubmit = event => {
    event.preventDefault(e); 
    setName('');
    setAdd('');
    setDob('');
    setSate('');
    setAge('');
    setPin('');
    const {name,value}=e.target
    setUser({...user,[name]:value})
  };

  const postdata= async(e)=>{
	  e.preventDefault();
	  const{name,add,dob,state,age,pin}=user;
	  const res = await fetch("http://localhost:4000/candidate",{
		  method:"POST",
		  headers:{
			  "Content-Type":"application/json"
		  },
		  body:JSON.stringify({
			  name,add,dob,state,age,pin
		  }),
 });
	  const data =await res.json();
	  if(data){
		  window.alert("sucessfull");
		  console.log("Successfull");
          navigate('/landing')
	  } else{
		 
          window.alert("Invalid data");
          console.log("invalid data");
	  }

  }
  return (
    <div >
      <section className="vh-100 gradient-custom">
    <div className="container py-5 h-100 mt-5" >
    <div className="row justify-content-center align-items-center h-100">
      <div className="col-12 col-lg-9 col-xl-7">
        <div className="card shadow-2-strong card-registration">
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Create Candidate</h3>
            <form>

              <div className="row">
                <div className="col-md-6 mb-4">
                 <div className="form-outline">
                  <label className="form-label" > Name</label>
                    <input type="text" id="firstName" className="form-control form-control-lg" value={name} placeholder='enter your name'  onChange={event => setName(event.target.value)}/>
                   </div>
                    </div>
               
               <div className="col-md-6 mb-4">
                <div className="form-outline">
                  <label className="form-label" >Address</label>
                    <input type="text" id="lastName" className="form-control form-control-lg" value={add} placeholder='enter your address'  onChange={event => setAdd(event.target.value)}/>
                    </div>
                    </div>
                     </div>

              <div className="row">
                <div className="col-md-6 mb-4 d-flex align-items-center">
                 <div className="form-outline datepicker w-100">
                 <label  className="form-label">Date of Birth</label>
                    <input type="text" className="form-control form-control-lg" id="birthdayDate" value={dob} placeholder='enter your Date of Birth'  onChange={event => setDob(event.target.value)}/>
                   
                  </div>

                </div>
                <div className="col-md-6 mb-4">
                <div className="form-outline">
                <label  className="form-label">State</label>
               <div className="form-outline datepicker w-100">
               <select className="form-control form-control-lg"  >
                    <option value="1"disabled >Select your state</option>
                    <option value="2">Karnataka</option>
                    <option value="3">Maharashtra</option>
                    <option value="4">Goa</option>
                    <option value="5">Other</option>
                  </select>
                  </div>
                  </div>
               </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-4 pb-2">

                  <div className="form-outline">
                  <label className="form-label" >Age</label>
                    <input type="number" id="emailAddress" className="form-control form-control-lg" value={age} placeholder='enter your age' onChange={event => setAge(event.target.value)} />
                 </div>

                </div>
                
                <div className="col-md-6 mb-4 pb-2">
                   <div className="form-outline">
                  <label className="form-label" >Pin Code</label>
                    <input type="text" maxLength={'6'} id="phoneNumber" value={pin} className="form-control form-control-lg" placeholder='enter your 6-digit pin code' onChange={event => setPin(event.target.value)} />
                   
                  </div>

                </div>
              </div>

           
              <div className='btn'>
              <div className="mt-4 p-1 ">
                <input className="btn btn-primary btn-lg" type="submit" value="Cancle" onClick={handleSubmit} />
                <input className="btn btn-primary btn-lg" type="submit" value="Submit" onClick={postdata} />
              </div>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Candidatepage