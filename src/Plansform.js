import React, { useState } from 'react'

import Button from "@mui/material/Button";
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import emailjs from 'emailjs-com';
import {useNavigate} from "react-router-dom";

function Plansform() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [plan, setPlan] = React.useState('');
  const [emailSent, setEmailSent] = useState(false);
  
  const navigate=useNavigate();
  const submit = async () => {
    if (name && email && address && number && plan && isValidEmail(email)) {
       // TODO - send mail
       const serviceId = 'service_moi4zla';
       const templateId = 'template_gjd9um6';
       const userId = 'BJU4V2BUcwviQPhw8';
       const templateParams = {
           name,
           email,
           address,
           number,
           plan
       };
         
       await emailjs.send(serviceId, templateId, templateParams, userId)
          
        setName('');
        setEmail('');
        setAddress('');
        setNumber('');
        setPlan('');  
        setEmailSent(true);
        alert("You are subscribed for this plan");
        navigate("/");
    } else {
        alert('Please fill in all fields.');
    }
}

{/* checking for valid email id */}
console.log(emailSent);
const isValidEmail = email => {
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase()); 
};
  return (
    <section className="subscribe_form">
    <div className="subscribe_box">
    <p id="subscribe">Subscribe Form</p>
        <form  className="planform">
        <TextField error={!name.length>0} helperText={name.length>0 ? "" : "enter name"} label="Name" variant="standard" size="small" value={name} onChange={e => setName(e.target.value)} />
        <TextField label="Address" variant="standard" size="small" value={address} onChange={e => setAddress(e.target.value)}/>
        <TextField  type="number" label="Contact" variant="standard"  size="small" value={number} onChange={e => setNumber(e.target.value)} />
        <TextField  label="Email id" variant="standard"  size="small" value={email} onChange={e => setEmail(e.target.value)} />
        <FormLabel className="select_plan">Select Plan </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        value={plan}
        onChange={e => setPlan(e.target.value)}
        row
      >
        <FormControlLabel value="premium" control={<Radio />} label="Premium" />
        <FormControlLabel value="pro" control={<Radio />} label="Pro" />
        <FormControlLabel value="starter" control={<Radio />} label="Starter"  />
      </RadioGroup>
        <Button type="button" variant="contained" onClick={submit} style={{border:"none",backgroundColor:"#e67e22",borderRadius:"200px",padding:"10px 20px",margin:"20px 0px"}}>Send</Button>
        </form>
        
        </div>
        </section>
  )
}

export default Plansform