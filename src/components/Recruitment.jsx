import React, { useState } from 'react'

import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'
import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const Recruitment = (props) => {
  var [inputs,setInputs]=useState({"Admno":'',"Sname":'',"Age":'',"Status":'ACTIVE'})

  const navigate = useNavigate();
  
  const inputhandler =(event)=> {
      const {name,value}=event.target
      setInputs((inputs)=>({...inputs,[name]:value}))
      console.log(inputs)
  }
  
  const savedata =()=>{
    console.log(inputs)
    axios.post("http://localhost:4005/recruitment"+"/hrm/recruitment",inputs)
    .then((response)=>{alert("Record Saved")})
    .catch(err=>console.log(err))
  
    navigate('/view')
  }
  
  
  return (
    <div align="center">
      <div><Topbar xxx={props.checkLogout}/><Sidebar/></div>
      <Typography>REGISTRATION FORM</Typography><br/>
      <TextField  label="Admission No" variant="filled" name="Admno" value={inputs.Admno} onChange={inputhandler}/><br/><br/>
      <TextField  label="NAME" variant="filled" name="Sname" value={inputs.Sname}  onChange={inputhandler}/><br/><br/>
      <TextField  label="Age" variant="filled" name="Age" value={inputs.Age}  onChange={inputhandler} /><br/><br/>
      Status: &nbsp;&nbsp;
      <select name="Status" value={inputs.Status}  onChange={inputhandler}>
       <option value="ACTIVE">ACTIVE</option>
       <option value="INACTIVE">INACTIVE</option>
      </select>
      <br/><br/>
      <Button variant="contained" onClick={savedata}>SUBMIT</Button>
    </div>
  )
}

export default Recruitment
