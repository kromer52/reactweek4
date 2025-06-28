import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

export default function App() {
  const [city, setCity] = useState("London");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    searchCity(city);
  }, []);

  function formatDate(timestamp) {
    const date = new Date(timestamp * 1000);
    let minutes = date.getMinutes();
    let hours = date.getHours();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[date.getDay()];
    if (minutes < 10) minutes = `0${minutes}`;
    return `${day} ${hours}:${minutes}`;
  }

  function searchCity(cityName) {
    const apiKey = "303634af30at1e0bobd77c2b1f682f81";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}`;
    axios.get(apiUrl).then((response) => {
      const data = response.data;
      setWeather({
        city: data.city,
        time: formatDate(data.time),
        description: data.condition.description,
        humidity: data.temperature.humidity,
        wind: data.wind.speed,
        temperature: Math.round(data.temperature.current),
        iconUrl: data.condition.icon_url,
      });
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const input = event.target.elements.cityInput.value;
    setCity(input);
    searchCity(input);
  }

  return (
    <div className="weather-app">
      <header>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            name="cityInput"
            placeholder="Enter a city.."
            required
            className="search-form-input"
          />
          <input type="submit" value="Search" className="search-form-button" />
        </form>
      </header>

      <main>
        {weather ? (
          <div className="weather-app-data">
            <div>
              <h1 className="weather-app-city">{weather.city}</h1>
              <p className="weather-app-details">
                {weather.time}, {weather.description}
                <br />
                Humidity: <strong>{weather.humidity}%</strong>, Wind:{" "}
                <strong>{weather.wind}km/h</strong>
              </p>
            </div>
            <div className="weather-app-temperature-container">
              <div id="icon">
                <img src={weather.iconUrl} alt={weather.description} className="weather-app-icon" />
              </div>
              <div className="weather-app-temperature">{weather.temperature}</div>
              <div className="weather-app-unit">°C</div>
            </div>
          </div>
        ) : (
          <p>Loading weather data...</p>
        )}
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
