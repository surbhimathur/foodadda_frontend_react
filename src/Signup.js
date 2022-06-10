import {Link, useNavigate} from "react-router-dom"
import React, { useState } from 'react'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';
import axios from "axios";

function Signup() {
  const [data,setData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:""
  });

const navigate=useNavigate();
const [error,setError]=useState("");
  
const handleChange=({currentTarget:TextField})=>{
setData({...data,[TextField.name]:TextField.value});
}

const handleSubmit=async(e)=>{
  e.preventDefault();
  try {
    const url="http://localhost:8080/api/users";
    const {data:res}=await axios.post(url,data);
    navigate("/login")
    console.log(res.message);
  } 
  catch (error) {
    if(error.response && error.response.status>=400 && error.response.status<=500)
    {
      setError(error.response.data.message)
    }
  }
}


  
  return (
    <section className="signup_section">
    <div className="signup">
   
   <p id="signin_heading">Create Account</p>
    <form onSubmit={handleSubmit}>
         <div className="inputbox_sigin">
         <TextField className="firstname" variant="standard" name="firstName" value={data.firstName} onChange={handleChange} label="First Name" size="small" style={{margin:"25px 0px"}} />
           <TextField  className="firstname" variant="standard" name="lastName" value={data.lastName} onChange={handleChange} label="Last Name" size="small" />
         <TextField className="firstname" variant="standard" name="email" value={data.email} onChange={handleChange} label="Email id" size="small" style={{margin:"25px 0px"}} />
          <TextField
          name="password"
          value={data.password}
          onChange={handleChange}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          size="small"
         
          variant="standard"
          className="firstname"
        />
        {/* <TextField
        name="reEnterPassword"
        
          id="outlined-password-input"
          placeholder="Re-enter Password"
          type="password"
          autoComplete="current-password"
          size="small"
          style={{width:"320px"}}
          InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
        }}
        /> */}
        </div>
        {error && <div className="error_msg">{error}</div>}
      <div className="signin_button"> <Button type="submit" style={{border:"none",backgroundColor:"#e67e22",borderRadius:"200px",padding:"10px 20px"}} variant="contained" size="normal" >Sign Up</Button></div> 
    
      <div className="signin_button loginbutton "><p style={{color:"black",fontWeight:"400"}}>Already have a account ?&nbsp; </p> <Link to="/login" id="signuplink"><p  style={{fontWeight:"600"}}>Sign In</p></Link></div> 
      </form>
      
    </div>
    </section>
  )
}

export default Signup