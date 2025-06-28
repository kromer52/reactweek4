import React from "react";
import "./App.css";


export default function TemperatureBox({ weather }) {
  return (
    <div className="weather-app-temperature-container">
      <div id="icon">
        <img
          src={weather.iconUrl}
          alt={weather.description}
          className="weather-app-icon"
        />
      </div>
      <div className="weather-app-temperature">{weather.temperature}</div>
      <div className="weather-app-unit">°C</div>
    </div>
  );
}
