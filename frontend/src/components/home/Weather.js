import React, { useState } from "react";
import "./Weather.css";
const api = {
  key: "7a4e858384348cc7ea7327039469680f",
  base: "https://api.openweathermap.org/data/2.5/",
};

const Weather = () => {
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  const [weather, setWeather] = useState({});
  const [query, setQuery] = useState("");

  const search = (evt) => {
    if (evt.key == "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  return (
    <div className="weather">
      <div className="weather-card">
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Enter a city name"
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={search}
          />
        </div>
        <div className="location-box">
          <div className="location">Toronto, CA</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">15c</div>
          <div className="weather">Sunny</div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
