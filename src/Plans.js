import Button from "@mui/material/Button";
import CheckIcon from '@mui/icons-material/Check';
import {Link} from "react-router-dom"
import React from 'react'
import {useLocation} from 'react-router-dom';

function Plans() {
    const name = localStorage.getItem("firstName");         
   const location= useLocation();
  console.log(location.state?.plan);        // retrieving chosen plan selected by user from plansform file
  
  
  return (
    <section className="plans js-plans" id="signup">
    <div className="row" id="plans">
    <h2>Start eating healthy today</h2>
    </div>
    
    <div className="row plans_main_box">
    <div className="col span-1-of-3 plan_name_box">
        <div className="plan-box">
            
        <div>
         <h3>Premium</h3>
            <p className="plan-price">Rs 3000 <span>/ month</span></p>
            <p className="plan-price-meal">That’s only Rs 100 per meal</p>
        </div>
            
        <div>
        <ul>
            <li><CheckIcon style={{fontSize:"14px",marginRight:"10px",color:"#e67e22"}}/>1 meal every day</li>
            <li><CheckIcon style={{fontSize:"14px",marginRight:"10px",color:"#e67e22"}}/>Order 24/7</li>
            <li><CheckIcon style={{fontSize:"14px",marginRight:"10px",color:"#e67e22"}}/>Access to newest creations</li>
            <li><CheckIcon style={{fontSize:"14px",marginRight:"10px",color:"#e67e22"}}/>Free delivery</li>
        </ul>
        </div>
        {/* if user has signed in then only subscribe button will be visible to user and when user will select plan from form then all subscribe button will be disabled */}
        {name &&
           <div className="subscribe_button"> 
          
           {location.state?.plan?<Button variant="contained" disabled style={{borderRadius:"200px"}}>Subscribe</Button>:<Link to="/plansform" style={{borderBottom:"none"}}><Button variant="contained" style={{ backgroundColor: "#e67e22",borderRadius:"200px"}}>Subscribe</Button></Link>}
        </div> 
        }
       
        </div>
        </div>
    
        
        <div className="col span-1-of-3 plan_name_box">
        <div className="plan-box">
            <div>
         <h3>Pro</h3>
        <p className="plan-price">Rs 1500<span>/ month</span></p>
            <p className="plan-price-meal">That’s only Rs 50 per meal</p>
                </div>
        <div>
        <ul>
            <li><CheckIcon style={{fontSize:"14px",marginRight:"10px",color:"#e67e22"}}/>1 meal 10 days/month</li>
            <li><CheckIcon style={{fontSize:"14px",marginRight:"10px",color:"#e67e22"}}/>Order 24/7</li>
            <li><CheckIcon style={{fontSize:"14px",marginRight:"10px",color:"#e67e22"}}/>Access to newest creations</li>
            <li><CheckIcon style={{fontSize:"14px",marginRight:"10px",color:"#e67e22"}}/>Free delivery</li>
        </ul>
        </div>
        {name &&
           <div className="subscribe_button"> 
           {location.state?.plan?<Button variant="contained" disabled style={{borderRadius:"200px"}}>Subscribe</Button>:<Link to="/plansform" style={{borderBottom:"none"}}><Button variant="contained" style={{ backgroundColor: "#e67e22",borderRadius:"200px"}}>Subscribe</Button></Link>}
        </div> 
        }
        </div>
            </div>
        
        <div className="col span-1-of-3 plan_name_box">
        <div className="plan-box">
            <div>
         <h3>Starter</h3>
        <p className="plan-price">Rs 300<span>/ meal</span></p>
            <p className="plan-price-meal">&nbsp;</p>
        </div>
        <div>
        <ul>
            <li><CheckIcon style={{fontSize:"14px",marginRight:"10px",color:"#e67e22"}}/>1 meal</li>
            <li><CheckIcon style={{fontSize:"14px",marginRight:"10px",color:"#e67e22"}}/>Order from 8 am to 12 pm</li>
            <li><CheckIcon style={{fontSize:"14px",marginRight:"10px",color:"#e67e22"}}/>No access to newest creations</li>
            <li><CheckIcon style={{fontSize:"14px",marginRight:"10px",color:"#e67e22"}}/>Free delivery</li>
        </ul>
        </div>
        {name &&
           <div className="subscribe_button"> 
           {location.state?.plan?<Button variant="contained" disabled style={{borderRadius:"200px"}}>Subscribe</Button>:<Link to="/plansform" style={{borderBottom:"none"}}><Button variant="contained" style={{ backgroundColor: "#e67e22",borderRadius:"200px"}}>Subscribe</Button></Link>}
        </div> 
        }
        </div>
            </div></div>
</section>

  )
}

export default Plans