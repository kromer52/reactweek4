import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import SearchForm from "./components/SearchForm";
import WeatherInfo from "./components/WeatherInfo";
import TemperatureBox from "./components/TemperatureBox";
import Footer from "./components/Footer";

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

  return (
    <div className="weather-app">
      <header>
        <SearchForm onSearch={searchCity} />
      </header>
      <main>
        {weather ? (
          <div className="weather-app-data">
            <WeatherInfo weather={weather} />
            <TemperatureBox weather={weather} />
          </div>
        ) : (
          <p>Loading weather data...</p>
        )}
      </main>
      <Footer />
    </div>
  );
}
