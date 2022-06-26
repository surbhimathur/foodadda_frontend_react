import React, { useEffect, useState } from 'react'
import {useLocation, useNavigate} from 'react-router-dom';

import Button from "@mui/material/Button";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import Prices from "./Prices";
import TextField from '@mui/material/TextField';

function Plansform() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');

 
  
  
  const navigate=useNavigate();
  const location = useLocation();
  //getting plans status true or false that are added to cart from plans file 
  const [breakfast,setBreakfast]=useState(location.state?.cart.breakfast);
  const [lunch,setLunch]=useState(location.state?.cart.lunch);
  const [dinner,setDinner]=useState(location.state?.cart.dinner);
  console.log(breakfast,lunch,dinner);
  
const [totalAmount,setTotalAmount]=useState(0);

//calculation of total amount
useEffect(() => {
let total=0;
total+=breakfast && Prices.breakfast;
total+=lunch && Prices.lunch;
total+=dinner && Prices.dinner;
setTotalAmount(total);
    
  
}, [breakfast,lunch,dinner])




//script for razorpay
const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
   document.body.appendChild(script);
 });
};

//paynow button
const displayRazorpay=async(amount)=>{
  if(name==="" || address==="" || email==="" || number==="")
  {
     alert("Please fill all the fields");
  }
  else{
  const res= await loadScript(
    'https://checkout.razorpay.com/v1/checkout.js'
  );
  
  if(!res){
    alert('You are offline...Failed to load Razorpay SDK');
    return 
  }


const options={
  key:"rzp_test_4voTTtJHktm6uT",
  currency:"INR",
  amount: amount * 100,
  name:"Food Adda",
  description:"Thanks for payment",
 handler:function(response)
 {
  localStorage.setItem(
    "mealname",JSON.stringify({breakfast,lunch,dinner})
  )
  
  alert("Payment successfull & payment id is  " + response.razorpay_payment_id);
  
  navigate("/");
 }, 

 prefill:{
  name:"Food Adda"
 }
}

const paymentObject=new window.Razorpay(options);
paymentObject.open()

}
};
  
  return (
    //form for purchasing plan
    <section className="subscribe_form">
    <div className="subscribe_box">
    <p id="subscribe">Cart</p>
        <form  className="planform">
        
         <TextField  label="Name" variant="standard" size="small" value={name} onChange={e => setName(e.target.value)} />
        <TextField label="Address" variant="standard" size="small" value={address} onChange={e => setAddress(e.target.value)}/>
        <TextField  label="Contact" variant="standard"  size="small" value={number} onChange={e => setNumber(e.target.value)} />
        <TextField  label="Email id" variant="standard"  size="small" value={email} onChange={e => setEmail(e.target.value)} />
        <h4 style={{margin:"20px 0px 0px 0px",fontSize:"22px"}}>Meal Selected</h4>

       {breakfast &&
       <div className="selected_plan">
        <p>Breakfast</p>
        <p><CurrencyRupeeIcon style={{verticalAlign: 'middle',fontSize:"20px"}}/>1500
        <Fab color="primary" size="small" style={{marginLeft:"10px"}}>
        <DeleteIcon style={{fontSize:"20px"}}  onClick={()=>setBreakfast(!breakfast)}/>
      </Fab></p>
        </div>
       } 
       {lunch &&
        <div className="selected_plan">
        <p>Lunch</p>
        <p><CurrencyRupeeIcon style={{verticalAlign: 'middle',fontSize:"20px"}}/>2400
        <Fab color="primary" size="small" style={{marginLeft:"10px"}}>
        <DeleteIcon style={{fontSize:"20px"}} onClick={()=>setLunch(!lunch)}/>
      </Fab></p>
        </div>
       } 
       {dinner &&
        <div className="selected_plan">
        <p>Dinner</p>
        <p><CurrencyRupeeIcon style={{verticalAlign: 'middle',fontSize:"20px"}}/>3000
        <Fab color="primary" size="small" style={{marginLeft:"10px"}}>
        <DeleteIcon style={{fontSize:"20px"}} onClick={()=>setDinner(!dinner)}/>
      </Fab></p>
        </div>
       } 
       <hr style={{backgroundColor:"black",height:"1px",border:"none",margin:"10px 0px"}}></hr>
       <div className="total_amount">
       <p>Total Amount</p>
       <p><CurrencyRupeeIcon style={{verticalAlign: 'middle',fontSize:"20px"}}/>{totalAmount}</p>
       </div>
        <Button type="button" onClick={()=>displayRazorpay(totalAmount)} variant="contained"  style={{border:"none",backgroundColor:"#e67e22",borderRadius:"200px",padding:"10px 20px",margin:"20px 0px"}}>Pay Now</Button> 
        </form>
        
        </div>
        </section>
  )
}

export default Plansform