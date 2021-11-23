import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  
  function handleWeatherResponse(response) {
    setWeatherData({
      city: response.data.name,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      time: new Date(response.data.dt *1000),
      icon: response.data.weather[0].icon,
      wind:Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      ready: true
    });
  }

  function search() {
    const apiKey = "92161eb593fedf6f773cc741f318b677";
    let units = "metric";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiURL).then(handleWeatherResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

   
  if (weatherData.ready) {
     return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
              <input type="search"
                placeholder="Input city name"
                className="form-control"
                 autoFocus="on"
                 onChange={handleCityChange}
              />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-100" />
          </div>
        </div>
        </form>
         <WeatherInfo data={weatherData} />
         <WeatherForecast coord={weatherData.coordinates} />
         </div>
    );
  }
  else {
    search();
    return "Loading...";
  }
  
 
}
