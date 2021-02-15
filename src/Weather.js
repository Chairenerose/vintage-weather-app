import React from "react";

export default function Weather() {
    return (
        <div className="WeatherText" style={{
            backgroundImage: "url(../img/Sky.jpg)",
            backgroundRepeat: "no-repeat ",
            backgroundSize: "cover"

        }}>
            <h1>New York City</h1>
            <ul>
                <li>Monday 20:00</li>
                <li>Mostly Cloudy</li>
            </ul>

            <div className="row">
                <div className="col-6">
                    <img src="https://iconarchive.com/download/i45469/iconka/magic-weather/cloudiness.ico" alt="Golden Sun" />
                    2°C
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