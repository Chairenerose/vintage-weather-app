import React from "react";
import './App.css';


export default function Weather() {
    return (
        <div className="WeatherText" style={{
            backgroundImage: "url(../img/Sky.jpg)",
            backgroundRepeat: "no-repeat ",
            backgroundSize: "cover",
            borderRadius: 7
        }}>


            <h1>Barcelona</h1>
            <ul>
                <li>Monday 20:00</li>
                <li>Mostly Cloudy</li>
            </ul>

            <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Golden Sun" />
                    <span className="temperature">20</span><span>°C|°F</span>
                </div>

                <div className="col-6">
                    <ul>
                        <li>Precipitation: 10%</li>
                        <li>Humidity: 75%</li>
                        <li>Wind: 10 km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}