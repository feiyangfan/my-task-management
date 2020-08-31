import React, { useState, useEffect } from "react";
import "./Weather.css";
const api = {
  key: "f358ffff8fda5bf3cdf2d675caabf95f",
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
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  // const initWeather = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(function(position) {
  //       fetch(`${api.base}weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&APPID=${api.key}`)
  //       .then((res) => res.json)
  //       .then((result) => {
  //         setWeather(result)
  //       });
  //     }
  //   } else {}
  // };

  const initWeather = () => {
    fetch(`${api.base}weather?q=toronto&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(result);
      });
  };

  useEffect(() => {
    console.log(1);
  });

  // TODO: use browser's geo location and add what happens if its undefined.
  return (
    <div className="weather">
      <div className="weather-card">
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Enter a city name"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-box">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(weather.main.temp)}°c</div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Weather;
