import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherData(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-2">
        <div className="col-6">
          <WeatherIcon code={props.data.icon} />

          <WeatherTemperature fahrenheit={props.data.temperature} />
        </div>

        <div className="col-6 mt-3">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} mp/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
