import React, { useState } from "react";
import axios from "axios";
import WeatherForecastPreview from "./WeatherForecastPreview";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);

    function handleForecastResponse(response) {
        setForecast(response.data);
        setLoaded(true);
    }
if (loaded && props.city === forecast.city.name && props.unit === "celsius") {
    return (
    <div className="WeatherForecast row">
        <WeatherForecastPreview data={forecast.list[0]} unit={props.unit} />
        <WeatherForecastPreview data={forecast.list[1]} unit={props.unit} />
        <WeatherForecastPreview data={forecast.list[2]} unit={props.unit} />
    </div>
    );
} else {
    if (loaded && props.city === forecast.city.name && props.unit === "fahrenheit") {
    return (
    <div className="WeatherForecast row">
        <WeatherForecastPreview data={forecast.list[0]} unit={props.unit} />
        <WeatherForecastPreview data={forecast.list[1]} unit={props.unit} />
        <WeatherForecastPreview data={forecast.list[2]} unit={props.unit} />
    </div>
    );
    } else {
    let apiKey = "0b1fa8952349f479be72640e8d64dd95";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
    return null;
    }
    }
}

//if (loaded && props.city === forecast.city.name && props.unit === "celsius") {
 //   return (
  //  <div className="WeatherForecast row">
  //      {forecast.list.slice(0, 3).map(function (forecastItem) {
  //          return <WeatherForecastPreview data={forecastItem} />
  //          // <WeatherForecastPreview data={forecast.list[0]}>
  //      })}
  //  </div>
  //  );