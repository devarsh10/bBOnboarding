// import React from "react";
// import { useState, useEffect } from "react";
// import logo from "./images/logo.png";
// import CropFreeIcon from "@mui/icons-material/CropFree";
// import Home from "@mui/icons-material/Home";
// import "./PageFour.css";

// export default function PageFour() {
    
//   const [colorClass, setColorClass] = useState('');

//   useEffect(() => {
//     function setColor() {
//       const color = sessionStorage.getItem('storedColor');
//       if (color === 'Blue') {
//         setColorClass('blue');
//       } else if (color === 'Red') {
//         setColorClass('red');
//       } else {
//         setColorClass(''); // Default color class
//       }
//     }
//     setColor();
//   }, []);

//     return (
//     <>
//       <div class="container">
//         <div class="header">
//           <img src={logo} alt="App Icon" class="image-one" />
//         </div>
//         <div className={`make-your-move ${colorClass}`} id="make-your-move">
//           <h2>make your move</h2>
//           <div class="grid">
//             <div class="dot"></div>
//             <div class="dot"></div>
//             <div class="dot"></div>
//             <div class="dot"></div>
//             <div class="dot"></div>
//             <div class="dot"></div>
//             <div class="dot"></div>
//             <div class="dot"></div>
//             <div class="dot"></div>
//             <div class="dot"></div>
//             <div class="dot"></div>
//             <div class="dot"></div>
//             <div class="dot"></div>
//             <div class="dot"></div>
//             <div class="dot"></div>
//             <div class="dot"></div>
//             <div class="dot"></div>
//             <div class="dot"></div>
//             <div class="dot"></div>
//             <div class="dot"></div>
//             <div class="dot"></div>
//             <div class="dot"></div>
//             <div class="dot"></div>
//             <div class="dot"></div>
//             <div class="dot"></div>
//           </div>

//           <div class="button-container">
//             <button class="submit-button">select</button>
//           </div>
//         </div>

//         <div className="footer">
//           <footer class="footer">
//             <Home className="footer-content-one" />
//             <CropFreeIcon className="footer-content-two" />
//           </footer>
//         </div>
//       </div>
//     </>
//   );
// }


import React, { useEffect, useState } from "react";
import logo from "./images/logo.png";
import CropFreeIcon from "@mui/icons-material/CropFree";
import Home from "@mui/icons-material/Home";
import "./PageFour.css";
import { useNavigate } from "react-router-dom";

export default function PageFour() {
  const [currentColor, setCurrentColor] = useState('Blue'); // Current player color
  const [dots, setDots] = useState(Array(25).fill(null)); // Initial state for 25 dots

  useEffect(() => {
    // Set initial color based on session storage
    const storedColor = sessionStorage.getItem('storedColor') || 'Blue';
    setCurrentColor(storedColor);
  }, []);

  const handleDotClick = (index) => {
    const newDots = dots.slice();
    if (newDots[index] === null) {
      newDots[index] = currentColor.toLowerCase(); // Set the dot color to current player's color
      setDots(newDots);
      setCurrentColor((prevColor) => (prevColor === 'Blue' ? 'Red' : 'Blue')); // Toggle player turn
    }
  };

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/five')
  }

  return (
    <div className="container">
      <div className="header">
        <img src={logo} alt="App Icon" className="image-one" />
      </div>
      <div className={`make-your-move ${currentColor.toLowerCase()}`} id="make-your-move">
        <h2>make your move</h2>
        <div className="grid">
          {dots.map((dot, index) => (
            <div
              key={index}
              className={`dot ${dot}`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
        <div className="button-container">
          <button className="submit-button" onClick={handleSubmit}>submit</button>
        </div>
      </div>
        <footer className="footer">
          <Home className="footer-content-one" />
          <CropFreeIcon className="footer-content-two" />
        </footer>
    </div>
  );
}
