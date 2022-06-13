import "./App.css";
import "./resources/css/queries.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Cities from "./Cities";
import Features from "./Features";
import Login from "./Login";
import Navigation from "./Navigation";
import Plans from "./Plans";
import Plansform from "./Plansform";
import React from "react";
import Signup from "./Signup";
import Testimonials from "./Testimonials";
import Works from "./Works";

function App() {
 

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Navigation />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/plansform" exact element={<Plansform />} />
          <Route path="/features" exact element={<Features />} />
          <Route path="/works" exact element={<Works />} />
          <Route path="/cities" exact element={<Cities />} />
          <Route path="/testimonials" exact element={<Testimonials />} />
          <Route path="/plans" exact element={<Plans />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
