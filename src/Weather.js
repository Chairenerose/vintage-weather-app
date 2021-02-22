import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import './App.css';
import axios from "axios";


export default function Weather(props) {
    const [weatherData, setweatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        console.log(response.data)
        setweatherData({
            ready: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            humidity: response.data.main.humidity,
            precipitation: 9,
            city: response.data.name,
            icon: response.data.weather[0].icon,
            description: response.data.weather[0].description,
            date: new Date(response.data.dt * 1000),
        })

    }

    function engine() {
        const apiKey = "b40b1170719118f550e945ff17d55d7a";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        engine();
    }



    function handleCityChange(event) {
        setCity(event.target.value);

    }
    if (weatherData.ready) {
        return (

            <div className="Frame">
                <WeatherInfo data={weatherData} />

                <a href="#" className="scroll-down">
                    <div className="mouse">
                        <span></span>
                    </div>

                    <div className="arrow">
                        <span></span>
                    </div>
                </a>

                <Forecast city={weatherData.city} />
                <br />
                <div className="Searchengine">
                    <form onSubmit={handleSubmit}>
                        <input type="search" placeholder="Enter a city..." className="form-control" onChange={handleCityChange} autoFocus="on" />
                        <input type="submit" value="Search" className="btn btn-dark" />
                    </form>

                </div>
            </div>

        )
    } else {

        engine();
        return "Loading.."
    }


}