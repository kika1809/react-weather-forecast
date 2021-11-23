import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function day() {
        let date = new Date(props.data.dt * 1000);
        let week = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
        ];
        let day = week[date.getDay()];
        
        return day;   
    }

    return (
        <div className="WeatherForecastDay">
            <div className="forecast-day">{day()}</div>
            <WeatherIcon code={props.data.weather[0].icon} size={36} />
            <div className="forecast-xm">
                <span className="max-temp">{Math.round(props.data.temp.max)}°</span>
                <span className="min-temp">{Math.round(props.data.temp.min)}°</span>
            </div>
        </div>
    );
}