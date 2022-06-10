import Button from '@mui/material/Button';
import Navigation from "./Navigation";
import React from 'react'

function Homepage() {
  const handleLogout=()=>{
    localStorage.removeItem("token");
    window.location.reload();
  }
  const name=localStorage.getItem('firstName');
  return (
    <div className="home">
    <Navigation name={name}/>
      {/* </p>  
       <Button variant="outlined" onClick={handleLogout}>Log Out</Button>
       <h1>HomePage</h1> */}
    </div>
  )
}

export default Homepage;