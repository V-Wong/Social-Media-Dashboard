import React from 'react';
import CardGrid from "./components/CardGrid";
import ThemeSwitch from "./components/ThemeSwitch";

import "./app.css";

function App() {
  return (
    <div className="container">
      <div className="top-bar">
        <h1>Social Media Dashboard</h1>
        <div></div>
        <p className="total-followers">Total followers: 3</p>
        <ThemeSwitch/>
      </div>
      <CardGrid/>
    </div>
  );
}

export default App;
