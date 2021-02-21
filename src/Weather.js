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
            iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            description: response.data.weather[0].description,
            date: new Date(response.data.dt * 1000),
        })

    }

    function engine() {
        const apiKey = "26dddc2844f26171cf43bb8923cb9f4b";
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
    }



    function handleCityChange(event) {
        setCity(event.target.value);
        engine();
    }
    if (weatherData.ready) {
        return (

            <div className="Frame">
                <WeatherInfo data={weatherData} />
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