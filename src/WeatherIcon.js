import React from "react";

export default function WeatherIcon(props) {
    return (
    <div className="clarfix">
        <img src={`https://openweathermap.org/img/wn/${props.code}@2x.png`} alt="icon" className="float-right" />
    </div>
    );
}