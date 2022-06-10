import React from 'react'
import customer2 from "./resources/images/customer-2.jpg";
import sandesh from "./resources/images/sandesh.JPG";
import sunanda from "./resources/images/sunanda.jpg";

function Testimonials() {
  return (
    <section className="testimonials">
    <div className="row">
        <h2>Our customers can't live without us</h2>
        </div>
        
        <div className="row testimonials_box">
        <div className=" col span-1-of-3 customers">
            <blockquote>Food Adda is just awesome! I just launched a startup which leaves me with no time for cooking, so Food Adda is a life-saver. Now that I got used to it, I couldn't live without my daily meals!
            <cite><img src={sandesh} /> Sandesh Shrivastava</cite>
            </blockquote>
        </div>
        
            <div className=" col span-1-of-3 customers">
            <blockquote>Inexpensive, healthy and great-tasting meals, delivered right to my home. We have lots of food delivery here in Mumbai, but no one comes even close to Food Adda. Me and my family are so in love!
            <cite><img src={customer2} />Kristy Gates</cite>
            </blockquote>
        </div>
            
            <div className=" col span-1-of-3 customers">
            <blockquote>I was looking for a quick and easy food delivery service in Kolkata. I tried a lot of them and ended up with Food Adda. Best food delivery service in the Kolkata. Keep up the great work!
            <cite><img src={sunanda} />Sunanda Roy</cite>
            </blockquote>
        </div>   
        </div>
    </section>
    
  )
}

export default Testimonials