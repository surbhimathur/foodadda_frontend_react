import React, { useState } from 'react'

import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import {Link} from "react-router-dom"
import LockIcon from '@mui/icons-material/Lock';
import TextField from '@mui/material/TextField';
import axios from 'axios';

function Login() {
  const [data,setData]=useState({
    email:"",
    password:""
  });


const [error,setError]=useState("");
  
const handleChange=({currentTarget:TextField})=>{
setData({...data,[TextField.name]:TextField.value});
}

const handleSubmit=async(e)=>{
  e.preventDefault();
  try {
    const url="http://localhost:8080/api/auth";
    const {data:res}=await axios.post(url,data);
   
    localStorage.setItem("token",res.token);
    localStorage.setItem("firstName",res.firstName);
    window.location="/"
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
    <section className="login_section">
    <div className="login">
    <p id="signin_heading">Sign In</p>
    <form >
    <div className="inputbox_sigin">
    
    <div className="email_box">
    <EmailIcon  style={{marginRight:"10px",color:"#e67e22"}}/>
    <TextField label="Email id" className="email" variant="standard" name="email"  value={data.email} onChange={handleChange} size="small" />
    
    </div> 
    <div className="email_box">
    <LockIcon style={{marginRight:"10px",color:"#e67e22"}} />
          <TextField
          variant="standard"
            name="password"
          value={data.password}
          onChange={handleChange}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          size="small"
          className="email"
        />
        </div>
        </div>
        {error && <div className="error_msg">{error}</div>}
      <div className="signin_button"> <Button type="submit" style={{border:"none",backgroundColor:"#e67e22",borderRadius:"200px",padding:"10px 20px"}} variant="contained" size="normal" onClick={handleSubmit}>Sign In</Button></div> 
      <div className="signin_button member"><p style={{color:"black",fontWeight:"400"}}>Not a member?&nbsp; </p> <Link to="/signup" id="signuplink"><p  style={{fontWeight:"600"}}>Sign Up Now</p> </Link></div>
      </form>
      
    </div>
    </section>
  )
}

export default Login