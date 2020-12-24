import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
    <div className="container">

     <Weather defaultCity="Barcelona" />
    <p>
    This project was coded by <a href="https://www.linkedin.com/in/anna-knyazkina/" target="_blank" rel="noopener noreferrer">Anna Knyazkina</a> and it's{" "}  
     <a href="https://github.com/vozsiberiana/weather-react"
     target="_blank" rel="noopener noreferrer">open-sourced</a> on GitHub
     </p>
     </div>
    </div>
  );
}

