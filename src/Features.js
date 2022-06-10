import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Features() {
  return (
    <section className="features  js--features" id="fofeatures">
      <div className="row" id="features">
        <h2>Get food fast &mdash; not fast food</h2>
        <p className="long-copy">
          Hello, we're Food Adda, your new premium food delivery service. We
          know you're always busy. No time for cooking. So let us take care of
          that, we're really good at it, we promise!
        </p>
      </div>

      <div className="row features_box">
        <div className="col span-1-of-4 box">
          <AllInclusiveIcon  className="icon-big"/>
          <h3>Up to 365 days/year</h3>
          <p>
            Never cook again! We really mean that. Our subscription plans
            include up to 365 days/year coverage. You can also choose to order
            more flexibly if that's your style.
          </p>
        </div>
        <div className="col span-1-of-4 box">
          <AccessAlarmIcon className="icon-big"/>
          <h3>Ready in 20 minutes</h3>
          <p>
            You're only twenty minutes away from your delicious and super
            healthy meals delivered right to your home. We work with the best
            chefs in each town to ensure that you're 100% happy.
          </p>
        </div>
        <div className="col span-1-of-4 box">
          <AgricultureIcon className="icon-big"/>
          <h3>100% organic</h3>
          <p>
            All our vegetables are fresh, organic and local. Animals are raised
            without added hormones or antibiotics. Good for your health, the
            environment, and it also tastes better!
          </p>
        </div>
        <div className="col span-1-of-4 box">
         <ShoppingCartIcon className="icon-big" />

          <h3>Order anything</h3>
          <p>
            We don't limit your creativity, which means you can order whatever
            you feel like. You can also choose from our menu containing over 100
            delicious meals. It's up to you!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
