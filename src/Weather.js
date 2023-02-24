import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      `The weather in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )}°F`
    );
  }
  let key = "c819171fe0abdc14039af4ef5dda283b";
  let units = "imperial";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${key}&units=${units}`;
  axios.get(url).then(handleResponse);
  return <h2>Weather App</h2>;
}
