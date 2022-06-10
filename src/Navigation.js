import React, { useState } from "react";

import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Box from "@mui/material/Box";
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
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from "@mui/icons-material/Logout";
import Meals from "./Meals";
import MenuIcon from "@mui/icons-material/Menu";
import Plans from "./Plans";
import Testimonials from "./Testimonials";
import Tooltip from "@mui/material/Tooltip";
import Works from "./Works";
import surlogo from "../src/resources/images/surlogo.png";

function Navigation() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("firstName");
    window.location.reload();
  };

  const name = localStorage.getItem("firstName");

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  //   const navList=[
  //       {
  //           item_name:"Food Delivery",
  //           href:<Features />
  //       },
  //       {
  //         item_name:"How It works",
  //         href:<Works />
  //     },
  //     {
  //         item_name:"Our cities",
  //         href:<Cities />
  //     }
  //   ]

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 160 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List style={{ textTransform: "capitalize" }} size="small">
        {["Food Delivery", "How It works", "Our cities"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <header>
        <div className="row" id="navbar">
          <img src={surlogo} alt="foodadda" className="logo" />

          {name && (
            <div className="user_avatar">
              <p className="username" onClick={handleOpenUserMenu}>
                {name}
              </p>
              <Tooltip title="Log out">
                <IconButton>
                  <LogoutIcon
                    onClick={handleLogout}
                    style={{
                      fontSize: "16px",
                      color: "white",
                      marginLeft: "10px",
                    }}
                  />
                </IconButton>
              </Tooltip>
            </div>
          )}
          {!name && (
            <div id="sign_box">
              <Link to="/login" id="login_link">
              <Tooltip title="Sign In">
                <IconButton>
                <LoginIcon style={{
                     
                      color: "white",
                      marginRight:"20px"
                      
                    }}/>
                </IconButton>
                </Tooltip> 
              </Link>
              <Link to="/signup" id="login_link">
              <Tooltip title="Sign Up">
                <IconButton>
                <AppRegistrationIcon style={{
                     
                      color: "white"
                      
                    }}/>
                </IconButton>
                </Tooltip> 
              </Link>
            </div>
          )}

          <React.Fragment key={"right"}>
            <Button onClick={toggleDrawer("right", true)}>
              <MenuIcon style={{ color: "white"}} />
            </Button>
            <Drawer
              anchor={"right"}
              open={state["right"]}
              onClose={toggleDrawer("right", false)}
            >
              {list("right")}
            </Drawer>
          </React.Fragment>
        </div>

        <div className="hero-text-box">
          <h1>
            Goodbye junk food
            <br /> Hello super healthy meals
          </h1>
          <HashLink to="#plans" id="link" smooth className="button button-full">  
            I’m hungry
            </HashLink>
            <HashLink to="#features" id="link" smooth className="button button-ghost">
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
