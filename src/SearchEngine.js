import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData";
import "./SearchEngine.css";

export default function SearchEngine(props) {
  const [weather, setWeather] = useState({ result: false });
  const [city, setCity] = useState(props.defaultCity);

  function displayWeather(response) {
    //console.log(response.data);
    setWeather({
      result: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSearch(event) {
    event.preventDefault();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weather.result) {
    return (
      <div className="SearchEngine">
        <form onSubmit={handleSearch}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search for a city"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
                autoFocus="on"
                onChange={updateCity}
              />
            </div>
          </div>
        </form>
        <WeatherData data={weather} />
      </div>
    );
  } else {
    const key = "c819171fe0abdc14039af4ef5dda283b";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`;
    axios.get(url).then(displayWeather);

    return "loading..";
  }
}
