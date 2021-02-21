import React, { useState } from 'react';
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
    const [showPop, setPop] = useState(false);
    const managePop = () => {
        setPop(!showPop)
    }
    const [loaded, setLoaded] = useState(false);
    const [forecast, setForecast] = useState(null);
    function handleForecastResponse(response) {
        setForecast(response.data);
        setLoaded(true);


    }

    if (loaded) {
        let myforecast = Math.round(forecast.list[0].main.temp);
        return (
            <div className="Forecast">
                <div className={`forecastBackground forecastShowing-${showPop}`} style={{
                    backgroundImage: "url(../img/Sky.jpg)",
                    backgroundSize: "cover",
                    borderRadius: 7,
                    backgroundRepeat: "no-repeat"
                }}>

                    {myforecast}

                </div>
                <button onClick={() => managePop()}>See Forecast</button>
            </div>
        );
    } else {
        let apiKey = "26dddc2844f26171cf43bb8923cb9f4b";
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
        axios.get(url).then(handleForecastResponse);

        return (
            null

        );
    }
}