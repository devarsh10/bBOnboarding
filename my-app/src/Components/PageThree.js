import React from "react";
import logo from "./images/logo.png"
import myImage from "./images/mobile.png"
import "./PageThree.css"
import Divider from "@mui/material/Divider";

import CropFreeIcon from "@mui/icons-material/CropFree";
import Home from "@mui/icons-material/Home";

export default function PageThree() {
    
  return (
    
    <>
      <div class="container">
        <div class="header">
          <img src={logo} alt="App Icon" class="image-one" />
        </div>
        <div class="container-two">
          <div className="text">
            <span className="red">red</span>
            <span className="or">or</span>
            <span className="blue">blue</span>
          </div>
          <div className="red-circle">
            
          </div>
          <div className="blue-circle">

          </div>
        
          <div class="button-container">
            <button class="select-button" >select</button>
          </div>
        </div>
        
        

        <div className="footer">
          <footer class="footer">
            <Home className="footer-content-one"/>
            <CropFreeIcon className="footer-content-two"/>   
          </footer>
        </div>
      </div>
    </>
  );
}
