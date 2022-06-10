import React from 'react'
import appstore from "../src/resources/images/app-store.png";
import googlestore from "../src/resources/images/googlestore.png";
import iphone from "../src/resources/images/iphone-adda.png";

function Works() {
  return (
    <section className="steps" id="work">
    <div className="row">
        <h2>How it works &mdash; Simple as 1, 2, 3</h2>
        </div>
        
    <div className="row works">
        <div className="col span-1-of-2 steps-box">
        <img src={iphone} alt="iphone-image" className="app-screen" />            
        </div>
        <div className="col span-1-of-2 steps-box">
            <div className="work-steps">
          <div>1</div>
            <p>Choose the subscription plan that best fits your needs and sign up today.</p>
            </div>
            <div className="work-steps">
          <div>2</div>
            <p>Order your delicious meal using our mobile app or website. Or you can even call us!</p>
            </div>
            <div className="work-steps">
          <div>3</div>
            <p>Enjoy your meal after less than 20 minutes. See you the next time!</p>
            </div>
            <div className="store">
        <a href="#" className="btn-app"> <img src={appstore} alt="app-store" /></a>
         <a href="#" className="btn-app"> <img src={googlestore} alt="google-store" /></a>
         </div>
        
        </div>
        
        </div>
    
    </section>
  )
}

export default Works