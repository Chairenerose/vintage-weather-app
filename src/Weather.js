import React, { useState } from "react";
import './App.css';
import axios from "axios";


export default function Weather(props) {
    const [weatherData, setweatherData] = useState({ ready: false });
    function handleResponse(response) {
        console.log(response.data)
        setweatherData({
            ready: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            precipitation: 9,
            city: response.data.name,
            iconUrl: 'https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png',
            description: response.data.weather[0].description,
            date: "Monday 22:00"
        })


    }
    if (weatherData.ready) {
        return (
            <div className="WeatherText" style={{
                backgroundImage: "url(../img/Sky.jpg)",
                backgroundSize: "cover",
                borderRadius: 7,
                backgroundRepeat: "no-repeat"
            }}>
                <div className="cloud" style={{
                    backgroundImage: "url(../img/cloud.png)",
                    borderRadius: 8,
                }}>

                    <h1>{weatherData.city}</h1>
                    <ul>
                        <li>{weatherData.date}</li>
                        <li>{weatherData.description}</li>
                    </ul>

                    <div className="row">
                        <div className="col-6">
                            <img src={weatherData.iconUrl} alt={weatherData.description} />
                            <span className="temperature">{Math.round(weatherData.temperature)}</span><span>°C|°F</span>
                        </div>

                        <div className="col-6">
                            <ul>
                                <li> <i class="fas fa-cloud-showers-heavy"></i> Precipitation: {weatherData.precipitation}%</li>
                                <li> <i class="fas fa-tint"></i> Humidity: {weatherData.humidity}%</li>
                                <li> <i class="fas fa-wind"></i> Wind: {weatherData.wind} km/h</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        const apiKey = "26dddc2844f26171cf43bb8923cb9f4b";
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading.."
    }


}