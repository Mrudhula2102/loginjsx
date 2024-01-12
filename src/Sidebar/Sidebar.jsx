import React from 'react'
import './sidebar.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BadgeIcon from '@mui/icons-material/Badge';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work'
import { Button } from '@mui/material';

const Sidebar = () => {
    
   return (
    <div className='sidebar'>
    <ul>
        <a href='/home' className='log'><li><HomeIcon fontSize='small'/> Home</li></a>
        <a href='/Myprofile' className='log'><li><AccountCircleIcon fontSize='small'/> My Profile</li></a>
        <a href='/Employeedetails' className='log'><li><BadgeIcon fontSize='small'/> Employee Details</li></a>
        <a href="/Training" className='log'><li><HowToRegIcon fontSize='small'/> Training</li></a>
       <a href="/Guestuser" className='log'><li><PeopleAltIcon fontSize='small'/> Guest User Details</li></a>
       <a href="/Recruitment" className='log'><li><WorkIcon fontSize='small'/>Recruitment</li></a>
       </ul>
       </div>
    
   )

   }
export default Sidebar