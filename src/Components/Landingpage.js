import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {FaEdit,FaTrashAlt} from "react-icons/fa";
import './Landingpage.css'

const Landingpage = () => {

    const navigate = useNavigate();
    const handelsubmit=(e)=>{
        e.preventDefault()
        navigate('/candidate')
    }
  return (
    <div className='containertable'>
        <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Name</th>
      <th scope="col">Date of Birth</th>
      <th scope="col">Email</th>
      <th scope="col">Result</th>
    </tr>
  </thead>
  <tbody>
    
          <tr>
          <th scope="row">1</th>
          <td><input type={'text'} /></td>
          <td><input type={'date'}/></td>
          <td><input type={'email'}/></td>
          <td>Shortlist &nbsp;
              <select>       
            <option value="1">Shortlist</option>
            <option value="2">Rejected</option>
           
        </select>
        
        </td>
        <td>
          <a href='#' className='btn btn-link' id='btn1'>
            <span className='text-gradient'><FaEdit/></span>
          </a>
          <a href='#' className='btn btn-link' id='btn2'>
            <span className='text-gradient'><FaTrashAlt/></span>
          </a>
         
      </td>
        </tr>
    
    


    
   
  </tbody>
</table>
<input className="btn btn-link btn-lg"  type="submit" value="+ Add new candidate" onClick={handelsubmit}/>
    
    </div>
  )
}

export default Landingpage