import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Myprofile.css'




const Training = (props) => {

  var [training,settraining]=useState({"idd":'',"ename":'',"age":'',"completed":'true',"remarks":''})

  const navigate = useNavigate();
  const inputhandler =(event)=> {
      const {name,value}=event.target
      settraining((training)=>({...training,[name]:value}))
      console.log(training)
  }
  
  const savedata =()=>{
    console.log(training)
    axios.post("http://localhost:4005/training",training)
    .then((response)=>{alert("Record Saved")})
    .catch(err=>console.log(err))
  
    navigate('/Trainingview')
  }
  return (
    <div align="center">
      <div><Topbar xxx={props.checkLogout}/><Sidebar/></div>
      <div className='div'>
      <h1>Employee Training Status</h1>
      <TextField  label="ID" variant="filled" name="id" value={training.idd} onChange={inputhandler}/><br/><br/>
      <TextField  label="name" variant="filled" name="ename" value={training.name}  onChange={inputhandler}/><br/><br/>
      <TextField  label="Age" variant="filled" name="age" value={training.age}  onChange={inputhandler} /><br/><br/>
      {/* <TextField  type="checkbox" label="completed" variant="filled" name="completed" value={inputs.completed}  onChange={inputhandler} /><br/><br/> */}
      <TextField  label="remarks" variant="filled" name="remarks" value={training.remarks}  onChange={inputhandler} /><br/><br/>
      {/* Status: &nbsp;&nbsp;
      <select name="Status" value={inputs.Status}  onChange={inputhandler}>
       <option value="ACTIVE">ACTIVE</option>
       <option value="INACTIVE">INACTIVE</option>
      </select> */}
      <br/><br/>
      <Button variant="contained" onClick={savedata}>SUBMIT</Button>
    </div>
    </div>
  )
}

export default Training