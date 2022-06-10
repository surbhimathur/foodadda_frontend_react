import Gateway from "../src/resources/images/Gateway.jpg";
import PersonIcon from '@mui/icons-material/Person';
import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import TwitterIcon from '@mui/icons-material/Twitter';
import kolkata from "../src/resources/images/kolkata.jpg";
import redfort from "../src/resources/images/red-fort-delhi.jpg";
import taj from "../src/resources/images/taj.jpg";

function Cities() {
  return (
    <section className="cities" id="city">
    <div className="row">
        <h2>We're currently in these cities</h2>
        </div>
    
    <div className="row cities_box">
        <div className="col span-1-of-4  city-detail">
        <div><img src={taj} alt="taj"/></div>
            <h3>Agra</h3>
            
            <div className="happy-eaters-box">
            <PersonIcon  className="icon-small"/>1600+ happy eaters 
            </div>
             <div className="happy-eaters-box">
                 <StarIcon className="icon-small" />60+ top chefs </div>
             <div className="happy-eaters-box">
                <TwitterIcon className="icon-small" /><a href="#">@foodadda_ag</a>
            </div>
        </div>
        
        
        <div className="col span-1-of-4  city-detail">
        <div><img src={redfort} alt="delhi"/></div>
            <h3>New-Delhi</h3>
            <div className="happy-eaters-box">
            <PersonIcon  className="icon-small"/>3700+ happy eaters</div>
             <div className="happy-eaters-box">
             <StarIcon className="icon-small" />160+ top chefs</div>
             <div className="happy-eaters-box">
             <TwitterIcon className="icon-small" /><a href="#">@foodadda_nd</a>
            </div>
        </div>
        
        <div className="col span-1-of-4  city-detail">
        <div><img src={kolkata} alt="kolkata"/></div>
            <h3>Kolkata</h3>
            <div className="happy-eaters-box">
            <PersonIcon  className="icon-small"/>2300+ happy eaters</div>
             <div className="happy-eaters-box">
             <StarIcon className="icon-small" />110+ top chefs </div>
             <div className="happy-eaters-box">
             <TwitterIcon className="icon-small" /><a href="#">@foodadda_ko</a>
            </div>
        </div>
        
        <div className="col span-1-of-4  city-detail">
        <div><img src={Gateway} alt="mumbai"/></div>
            <h3>Mumbai</h3>
            <div className="happy-eaters-box">
            <PersonIcon  className="icon-small"/>1200+ happy eaters</div>
             <div className="happy-eaters-box">
             <StarIcon className="icon-small" />50+ top chefs</div>
             <div className="happy-eaters-box">
             <TwitterIcon className="icon-small" /><a href="#">@foodadda_mu</a>
            </div>
        </div>
        
        </div>
    
    </section>
  )
}

export default Cities