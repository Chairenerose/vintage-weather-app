import React from "react";
import Frame from './Frame';

import './App.css';



export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Vintage Weather App</h1>
        <Frame />
        <p>
          Created by Chairene Chidozie <br />
        My <a href="https://github.com/Chairenerose/vintage-weather-app" target="_blank">Open-sourced Code</a>
        </p>
      </div>
    </div>
  );
} 
