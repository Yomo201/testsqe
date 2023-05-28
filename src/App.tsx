import React from 'react';
import './App.css';
// @ts-ignore
import AnalogClock from 'analog-clock-react'

function App() {
  const options = {
    "useCustomTime": false,
        "width": "300px",
        "border": true,
        "borderColor": "#70c1ff",
        "baseColor": "#4de7ff",
        "centerColor": "#ff00ae",
        "centerBorderColor": "#ffffff",
        "handColors": {
      "second": "#d81c7a",
          "minute": "#ffffff",
          "hour": "#ffffff"
    }
  }

  return (
    <div className="App">
        <AnalogClock {...options} />
    </div>
  );
}

export default App;
