import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Topbar from '../Topbar/Topbar'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

class Employeedetails extends React.Component /*= (props) => */{
      constructor(props) {
        super(props);
        this.state = {
          employee: {
          
            id: 1,
            name: 'Ann',
            age:20,
            adress:'ABC street',
            status:'Active'
    
          
          },
    
          
        };
        
      }
      
    
      render() {
        const { employee } = this.state;
    
  return (
    <div>
      {/* <div><Topbar xxx={props.checkLogout}/><Sidebar/></div> */}
      <Typography>Employee Details</Typography><br/>
       <TableContainer>
      <Table>
         <TableHead>
             <TableRow>
                 <TableCell></TableCell>
       <TableCell>ID: </TableCell>
      <TableCell> Name: </TableCell>
       <TableCell> Age: </TableCell>
        <TableCell> adress:</TableCell>
        <TableCell>status: </TableCell>

       </TableRow>
        </TableHead>
        <TableBody>
         <TableRow>
          <TableCell></TableCell>
          <TableCell>{employee.id}</TableCell>
           <TableCell>{employee.name}</TableCell>
           <TableCell>{employee.age}</TableCell>
          <TableCell>{employee.adress}</TableCell>
         <TableCell>{employee.status}</TableCell>
          

            </TableRow>
           </TableBody>

           </Table>
          </TableContainer>
    </div>
  );
 }
}


export default Employeedetails