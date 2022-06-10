import "./App.css";
import "./resources/css/queries.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Login from "./Login";
import Navigation from "./Navigation";
import Plansform from "./Plansform";
import React from "react";
import Signup from "./Signup";

function App() {
 

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Navigation />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/plansform" exact element={<Plansform />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
