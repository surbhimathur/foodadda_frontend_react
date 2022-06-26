import React, { useState } from "react";

import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import Button from "@mui/material/Button";
import Cities from "./Cities";
import Drawer from "@mui/material/Drawer";
import Features from "./Features";
import Footer from "./Footer";
import { HashLink } from "react-router-hash-link";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import Meals from "./Meals";
import MenuIcon from "@mui/icons-material/Menu";
import Plans from "./Plans";
import Testimonials from "./Testimonials";
import Tooltip from "@mui/material/Tooltip";
import Works from "./Works";
import surlogo from "../src/resources/images/surlogo.png";

function Navigation() {
// for handling log out button
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("firstName");
    window.location.reload();
  };

  const name = localStorage.getItem("firstName");   //for getting name from local storage

  const [openDrawer, setOpenDrawer] = useState(false);

  //for opening and closing drawer
  const handleToggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <div>
      <header>
      {/* navigation bar */}
        <div className="row" id="navbar">          
          <img src={surlogo} alt="foodadda" className="logo" />
          
          {/* for logout button and username */}
          {name && (
            <div className="user_avatar">
              <p className="username">{name}</p>
              <Tooltip title="Log out">
                <IconButton>
                  <LogoutIcon
                    onClick={handleLogout}
                    style={{
                      color: "white",
                      marginLeft: "10px",
                    }}
                  />
                </IconButton>
              </Tooltip>
            </div>
          )}
          
          {/* for displaying signin and registration button */}
          {!name && (
            <div id="sign_box">
              <Link to="/login" id="login_link">
                <Tooltip title="Sign In">
                  <IconButton>
                    <LoginIcon
                      style={{
                        color: "white",
                        marginRight: "10px",
                      }}
                    />
                  </IconButton>
                </Tooltip>
              </Link>
              <Link to="/signup" id="login_link">
                <Tooltip title="Sign Up">
                  <IconButton>
                    <AppRegistrationIcon
                      style={{
                        color: "white",
                      }}
                    />
                  </IconButton>
                </Tooltip>
              </Link>
            </div>
          )}

          {/* drawer */}
          <Button onClick={handleToggleDrawer}>
            <MenuIcon style={{ color: "white" }} />
          </Button>
          <Drawer
            style={{ width: "200px" }}
            onClose={handleToggleDrawer}
            anchor={"right"}
            open={openDrawer}
          >
            <List>
              <HashLink to="#features">
                <ListItem button onClick={handleToggleDrawer}>
                  <ListItemText>Food Delivery</ListItemText>
                </ListItem>
              </HashLink>
              <HashLink to="#work">
                <ListItem button onClick={handleToggleDrawer}>
                  <ListItemText>How it works</ListItemText>
                </ListItem>
              </HashLink>
              <HashLink to="#city">
                <ListItem button onClick={handleToggleDrawer}>
                  <ListItemText>Our Cities</ListItemText>
                </ListItem>
              </HashLink>
              <HashLink to="#testimonial">
                <ListItem button onClick={handleToggleDrawer}>
                  <ListItemText>Testimonials</ListItemText>
                </ListItem>
              </HashLink>
              <HashLink to="#plans">
                <ListItem button onClick={handleToggleDrawer}>
                  <ListItemText>Plans</ListItemText>
                </ListItem>
              </HashLink>
            </List>
          </Drawer>
        </div>
         
         {/* hero section */}
        <div className="hero-text-box">
          <h1>
            Goodbye junk food
            <br /> Hello super healthy meals
          </h1>
          <HashLink to="#plans" id="link" smooth className="button button-full">
            I’m hungry
          </HashLink>
          <HashLink
            to="#features"
            id="link"
            smooth
            className="button button-ghost"
          >
            Show me more
          </HashLink>
        </div>
      </header>
      <Features />
      <Meals />
      <Works />
      <Cities />
      <Testimonials />
      <Plans />
      <Footer />
    </div>
  );
}

export default Navigation;
