import React from "react";
import "./Search.css";

export default function Search() {
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
      <h1>New York</h1>
      <ul>
        <li>Date</li>
        <li>Description</li>
      </ul>
      <div className="row mt-2">
        <div className="col-6">
          <img
            src="http://openweathermap.org/img/wn/04d@2x.png"
            alt="description"
            className="float-left"
          />
          <span className="temperature">72</span>
          <span className="unit">°F</span>
        </div>
        <div className="col-6 mt-3">
          <ul>
            <li>Humidity:</li>
            <li>Wind: </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
