import React from "react";
import "./App.css";


export default function SearchForm({ onSearch }) {
  function handleSubmit(event) {
    event.preventDefault();
    const input = event.target.elements.cityInput.value;
    onSearch(input);
  }

  return (
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
  );
}
