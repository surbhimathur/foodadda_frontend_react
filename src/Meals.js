import React from 'react'
import dahi from "./resources/images/dahi vada.jpg";
import dosa from "./resources/images/dosa.jpg";
import four from "./resources/images/4.jpg";
import mango from "./resources/images/mango.jpg";
import one from "./resources/images/1.jpg";
import rice from "./resources/images/rice.jpg";
import three from "./resources/images/3.jpg";
import two from "./resources/images/2.jpg";

function Meals() {
  return (
    <section className="meals">
    <ul className="meals-showcase clearfix">
        <li> <figure className="meals-photo">
            <img src={one} alt="Korean bibimbap with egg and vegetables" />
            </figure></li>
        <li> <figure className="meals-photo" >
            <img src={two} alt="Simple italian pizza with cherry tomatoes"/>
            </figure></li>
        <li> <figure className="meals-photo" >
            <img src={three} alt="Chicken breast steak with vegetables"/>
            </figure></li>
        <li> <figure className="meals-photo">
            <img src={four} alt="Autumn pumpkin soup"/>
            </figure></li>
        </ul>
    
    <ul className="meals-showcase clearfix">
        <li> <figure className="meals-photo">
            <img src={mango} alt="mango-lassi" />
            </figure></li>
        <li> <figure className="meals-photo">
            <img src={rice}  alt="rice" />
            </figure></li>
        <li> <figure className="meals-photo">
            <img src={dahi} alt="dahi-vada"/>
            </figure></li>
        <li> <figure className="meals-photo">
            <img src={dosa} alt="dosa" />
            </figure></li>
    
        </ul>
    </section>
  )
}

export default Meals