// src/App.js
import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  useEffect(() => {
    // You’ll move your JS logic here later
  }, []);

  return (
    <div className="weather-app">
      <header>
        <form className="search-form" id="search-form">
          <input
            type="search"
            placeholder="Enter a city.."
            required
            id="search-form-input"
            className="search-form-input"
          />
          <input type="submit" value="Search" className="search-form-button" />
        </form>
      </header>
      <main>
        <div className="weather-app-data">
          <div>
            <h1 className="weather-app-city" id="city"></h1>
            <p className="weather-app-details">
              <span id="time"></span>, <span id="description"></span>
              <br />
              Humidity: <strong id="humidity"></strong>, Wind:{" "}
              <strong id="wind-speed"></strong>
            </p>
          </div>
          <div className="weather-app-temperature-container">
            <div id="icon"></div>
            <div className="weather-app-temperature" id="temperature"></div>
            <div className="weather-app-unit">°C</div>
          </div>
        </div>
      </main>
      <footer>
        Coded by{" "}
        <a href="https://github.com/kromer52" target="_blank" rel="noreferrer">
          Ilona
        </a>
        , code hosted on{" "}
        <a
          href="https://github.com/kromer52/homeworkweek7weatherapp"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        and website hosted on{" "}
        <a
          href="https://homeworkweek7weatherapp.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          Vercel
        </a>
      </footer>
    </div>
  );
}

export default App;
