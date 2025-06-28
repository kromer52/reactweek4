import React from "react";
import "./App.css";

export default function WeatherInfo({ weather }) {
  return (
    <div>
      <h1 className="weather-app-city">{weather.city}</h1>
      <p className="weather-app-details">
        {weather.time}, {weather.description}
        <br />
        Humidity: <strong>{weather.humidity}%</strong>, Wind:{" "}
        <strong>{weather.wind}km/h</strong>
      </p>
    </div>
  );
}
