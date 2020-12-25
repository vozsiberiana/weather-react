import React from "react";

export default function WeatherIcon(props) {
    return <img src={`https://openweathermap.org/img/wn/${props.code}@2x.png`} alt="icon" />
}