import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function displayCelsuis(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function celsius() {
    return ((props.fahrenheit - 32) * 5) / 9;
  }

  if (unit === "fahrenheit") {
    return (
      <span>
        <span className="temperature">{Math.round(props.fahrenheit)}</span>
        <span className="unit">
          °F |{" "}
          <a href="/" onClick={displayCelsuis}>
            °C{" "}
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span className="temperature">{Math.round(celsius())}</span>
        <span className="unit">
          <a href="/" onClick={displayFahrenheit}>
            °F{" "}
          </a>
          | °C{" "}
        </span>
      </span>
    );
  }
}
