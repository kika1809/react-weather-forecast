import React, {useState, useEffect} from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


import "./WeatherForecast.css";


export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
    const [forecastData, setForecastData] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coord]);

    function handleForecastResponse(response) {
        setForecastData(response.data.daily);
        setLoaded(true);
    }

    if (loaded) {
        return (
        <div className="WeatherForecast">
            <div className="row">
                {forecastData.map(function(dailyForecast, index) {
                    if(index<5){
                    return (
                        <div className="col" key={index}>
                          <WeatherForecastDay data={dailyForecast}/>
                        </div>
                        )
                    } else
                    { return null; }
                })}
                
            </div>
        </div>
        );
    }
    else {
        const apiKey = "92161eb593fedf6f773cc741f318b677";
        let units = "metric";
        let lon = props.coord.lon;
        let lat=props.coord.lat;
        let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,current&appid=${apiKey}&units=${units}`;
        axios.get(apiURL).then(handleForecastResponse);
        return null;
    }
    
}