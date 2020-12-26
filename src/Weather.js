import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";
import WeatherLogo from "./weatherlogo.svg";

export default function Weather(props) {
    
    const [weatherData, setWeatherData] = useState({ ready: false });
const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        wind: response.data.wind.speed,
        city: response.data.name,
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        humidity: response.data.main.humidity,
        date: new Date(response.data.dt * 1000)
    });

}

function handleSubmit(event) {
    event.preventDefault();
    search();
}

function search() {
    const apiKey = "0b1fa8952349f479be72640e8d64dd95";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}

function handleCityChange(event) {
setCity(event.target.value);
}

if (weatherData.ready) {
return (
    <div className="Weather">
            <form onSubmit={handleSubmit}>
              <div className="form-row d-flex justify-content-center">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Type a city.."
                  autoFocus="on"
                  onChange={handleCityChange}
                />
                <button type="submit" className="btn btn-primary">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </form> 


        <h1>{weatherData.city}</h1>
        <ul className="main_description">
            <li><FormattedDate date={weatherData.date} /></li>
            <li><WeatherTemperature celsius={weatherData.temperature} /></li>
        </ul>
        <div className="row mt-3">
            <div className="col-6 icon">
                <img src={WeatherLogo} alt="icon" className="image"/>
            </div>
            <div className="col-6">
                <ul className="info">
                    <li className="text-capitalize">{weatherData.description}</li>
                    <li>Humidity: {weatherData.humidity} %</li>
                    <li>Wind: {weatherData.wind} km/h</li>
                </ul>
            </div>
        </div>
        <WeatherForecast city={weatherData.city} />
    </div>
    );
} else {
search();
    return "loading..";
}


    
    
}