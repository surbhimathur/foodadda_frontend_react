import{ useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from "@mui/material/Button";
import CheckIcon from '@mui/icons-material/Check';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Fab from '@mui/material/Fab';
import {Link} from "react-router-dom"
import React from 'react'

function Plans() {
    const name = localStorage.getItem("firstName");    
    const mealplan=JSON.parse(localStorage.getItem("mealname"));      //getting all plan status i.e. true or false from plansform file
   
   
  const navigate=useNavigate();

  //setting all three plans as false
  const [cart, setCart] = useState({
    breakfast: false,
    lunch: false,
    dinner: false,
  });
 
  //for enable and disable add to cart buttons when user select any plan
  const [disable, setDisable] = useState(false);
  const [disablelunch, setDisablelunch] = useState(false);
  const [disabledinner, setDisabledinner] = useState(false);

  //for enable and disable checkout button
  const [isCheckoutEnable, setIsCheckoutEnable] = useState(false);
  
  //for handling add to cart button
  const handleAddToCart = (meal) => {
    const currentMealState = cart[meal];
    setCart({ ...cart, [meal]: !currentMealState });
    console.log(meal);
    if(meal==="breakfast")
    {
        setDisable(true); 
    }
    else if(meal==="lunch"){
        setDisablelunch(true);
    }
    else if(meal==="dinner"){
        setDisabledinner(true);
    }
    
  };
  
  //checkout button
  const handleCheckout = (meal) => {
    navigate("/plansform", { state: { cart } });
  };

  //checkoutbutton enable & disable
  useEffect(() => {
    setIsCheckoutEnable(Object.values(cart).some((e) => e === true));
   
  }, [cart]);
  
 
  return (
    <section className="plans js-plans" id="signup">
    <div className="row" id="plans">
    <h2>Start eating healthy today</h2>
    </div>
    
    <div className="row plans_main_box">
    <div className="col span-1-of-3 plan_name_box">
        <div className="plan-box">
            
        <div>
         <h3>Breakfast</h3>
            <p className="plan-price"><CurrencyRupeeIcon style={{verticalAlign: 'middle'}}/>1500<span>/ month</span></p>
        </div>
            
        <div>
        <ul>
            <li><CheckIcon style={{fontSize:"14px",marginRight:"10px",color:"#e67e22"}}/>White/ Red sauce pasta</li>
            <li><CheckIcon style={{fontSize:"14px",marginRight:"10px",color:"#e67e22"}}/>Dhokla with green chutney</li>
            <li><CheckIcon style={{fontSize:"14px",marginRight:"10px",color:"#e67e22"}}/>Sprouts with lots of veggies</li>
            <li><CheckIcon style={{fontSize:"14px",marginRight:"10px",color:"#e67e22"}}/>Poha with peanuts </li>
            <li><CheckIcon style={{fontSize:"14px",marginRight:"10px",color:"#e67e22"}}/>Veg cutlets</li>
            <li><CheckIcon style={{fontSize:"14px",marginRight:"10px",color:"#e67e22"}}/>Idli sambhar</li>
            <li><CheckIcon style={{fontSize:"14px",marginRight:"10px",color:"#e67e22"}}/>Aloo parantha with boondi raita </li>
        </ul>
        </div>
        {/* if user has signed in then only subscribe button will be visible to user and when user will select plan from form then all subscribe button will be disabled */}
        {name &&
           <div className="subscribe_button"> 
          
         <Button variant="contained" disabled={disable}  onClick={() => handleAddToCart("breakfast")} style={{ backgroundColor: "#e67e22",borderRadius:"200px"}}>Add to Cart</Button>
        </div> 
        }
        
        </div>
        </div>
    
        
        <div className="col span-1-of-3 plan_name_box">
        <div className="plan-box">
            <div>
         <h3>Lunch</h3>
        <p className="plan-price"><CurrencyRupeeIcon style={{verticalAlign: 'middle'}}/>2400<span>/ month</span></p>
            
                </div>
        <div>
        <ul>
            <li><CheckIcon style={{fontSize:"14px",marginRight:"10px",color:"#e67e22"}}/>Rajma, zeera rice, rotis, curd</li>
            <li><CheckIcon style={{fontSize:"14px",marginRight:"10px",color:"#e67e22"}}/>Arhar dal, bhindi sabji, rotis, cucumber raita</li>
            <li><CheckIcon style={{fontSize:"14px",marginRight:"10px",color:"#e67e22"}}/>Kadhai paneer, boondi raita, rotis, masala papad</li>
            <li><CheckIcon style={{fontSize:"14px",marginRight:"10px",color:"#e67e22"}}/>Dal makhani, rotis, capsicum sabji, mix veg raita</li>
            <li><CheckIcon style={{fontSize:"14px",marginRight:"10px",color:"#e67e22"}}/>Chole bhature, cucumber raita, pickle</li>
            <li><CheckIcon style={{fontSize:"14px",marginRight:"10px",color:"#e67e22"}}/>Pav Bhaji with green salad</li>
            <li><CheckIcon style={{fontSize:"14px",marginRight:"10px",color:"#e67e22"}}/>Mix dal, rotis, bharwa brinjal, curd</li>
        </ul>
        </div>
        {name &&
           <div className="subscribe_button"> 
           <Button disabled={disablelunch} onClick={() => handleAddToCart("lunch") } variant="contained" style={{ backgroundColor: "#e67e22",borderRadius:"200px"}}>Add to Cart</Button>
        </div> 
        }
        </div>
            </div> 
        
        <div className="col span-1-of-3 plan_name_box">
        <div className="plan-box">
            <div>
         <h3>Dinner</h3>
        <p className="plan-price"><CurrencyRupeeIcon style={{verticalAlign: 'middle'}}/>3000<span>/ month</span></p>
           
        </div>
        <div>
        <ul>
            <li><CheckIcon style={{fontSize:"14px",marginRight:"10px",color:"#e67e22"}}/>Malai kofta, 2 naan</li>
            <li><CheckIcon style={{fontSize:"14px",marginRight:"10px",color:"#e67e22"}}/>Masala khichdi with curd</li>
            <li><CheckIcon style={{fontSize:"14px",marginRight:"10px",color:"#e67e22"}}/>Masala Dosa with sambhar & coconut chutney</li>
            <li><CheckIcon style={{fontSize:"14px",marginRight:"10px",color:"#e67e22"}}/>Mix veg daliya</li>
            <li><CheckIcon style={{fontSize:"14px",marginRight:"10px",color:"#e67e22"}}/>Fried Rice with manchurian </li>
            <li><CheckIcon style={{fontSize:"14px",marginRight:"10px",color:"#e67e22"}}/>Mushroom matar curry, rotis, salad</li>
            <li><CheckIcon style={{fontSize:"14px",marginRight:"10px",color:"#e67e22"}}/>Paneer bhurji, rotis</li>
        </ul>
        </div>
        {name &&
           <div className="subscribe_button"> 
           <Button disabled={disabledinner} onClick={() => handleAddToCart("dinner")}  variant="contained" style={{ backgroundColor: "#e67e22",borderRadius:"200px"}}>Add to Cart</Button>
        </div> 
        }
        </div>
            </div>
            
            </div> 
            {name &&
            <div className="checkout">
            <Button
        variant="contained"
        
        style={{
          backgroundColor: "#e67e22",
          borderRadius: "200px",
          
        }}
        onClick={handleCheckout}
        disabled={!isCheckoutEnable}
      >
        Checkout
      </Button>
      </div>
            }
      
      {/* display message when user already purchased plan */}
      <div className="selectedplan"> 
      {name && mealplan &&
      <p>You have purchased</p>}
      {name && mealplan &&
        
        mealplan?.breakfast &&
      
     <p>&nbsp;breakfast plan</p> }
      
      {name && mealplan &&
        mealplan?.lunch &&
      
         <p>&nbsp;lunch plan</p>}
      
      { name && mealplan &&
        mealplan?.dinner &&
      
        <p>&nbsp;dinner plan</p>
      
      }
</div>
     
      
    
</section>

  )
}

export default Plans