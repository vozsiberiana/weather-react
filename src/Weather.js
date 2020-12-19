import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
    <div className="Weather">
    <form>
    <div className="row">
    <div className="col-9">
        <input type="search" 
            placeholder="Enter a city.."
            className="form-control"
            autoFocus="on"
        />
        </div>
        <div className="col-3">
        <input type="submit" 
            value="Search" 
            className="btn btn-primary w-100" />
            </div>
    </div>
    </form>

        <h1>Barcelona</h1>
        <ul>
        <li>21:45, Sat 19 Dec</li>
        <li><span className="temperature">20</span> <span className="unit">C</span></li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <img src="#" alt="Cloudy"/>
            </div>
            <div className="col-6">
                <ul>
                    <li>Precipitation: 15%</li>
                    <li>Humidity: 20%</li>
                    <li>Wind: 1 km/h</li>
                </ul>
            </div>
        </div>
    </div>
    );
    
}