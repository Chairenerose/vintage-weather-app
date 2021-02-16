import React from "react";
import Frame from './Frame';

import './App.css';



export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="myHeader">
          <span className="title1"> WTHR</span>
          <span className="title2"> Application</span>
        </div>
        <Frame />
        <p>
          Created by Chairene Chidozie <br />
        My <a href="https://github.com/Chairenerose/vintage-weather-app" target="_blank" id="githublink">Open-sourced Code</a>
        </p>
      </div>
    </div>
  );
} 
