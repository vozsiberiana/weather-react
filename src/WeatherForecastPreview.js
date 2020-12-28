import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastPreview.css";

export default function WeatherForecastPreview(props) {
    function hours() {
        let date = new Date(props.data.dt * 1000);
        let hours = date.getHours();
        return `${hours}:00`;
    }

function temperature() {
    let temperature = Math.round(props.data.main.temp);
    if(props.unit === "celsius") {
        return `${temperature}°C`;
    }
    else {
        let fahrenheit = Math.round((temperature * 9/5) + 32);
        return `${fahrenheit}°F`;
    }
    
}

    return (
        <div className="WeatherForecastPreview col">
            {hours()}
            <WeatherIcon code={props.data.weather[0].icon} />
            {temperature()}
        </div>
    );
}
            
            
            
            
            
           