import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Search.css";

export default function Search(props) {
  const [weather, setWeather] = useState({ result: false });

  function displayWeather(response) {
    //console.log(response.data);
    setWeather({
      result: true,
      cityName: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  if (weather.result) {
    return (
      <div className="Search">
        <form>
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
              />
            </div>
          </div>
        </form>
        <h1>{weather.cityName}</h1>
        <ul>
          <li>
            <FormattedDate date={weather.date} />
          </li>
          <li className="text-capitalize">{weather.description}</li>
        </ul>
        <div className="row mt-2">
          <div className="col-6">
            <img
              src={weather.icon}
              alt="weather description"
              className="float-left"
            />
            <span className="temperature">
              {Math.round(weather.temperature)}
            </span>
            <span className="unit">°F</span>
          </div>
          <div className="col-6 mt-3">
            <ul>
              <li>Humidity: {weather.humidity} %</li>
              <li>Wind: {Math.round(weather.wind)} mp/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const key = "c819171fe0abdc14039af4ef5dda283b";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${key}&units=imperial`;
    axios.get(url).then(displayWeather);

    return "loading..";
  }
}
