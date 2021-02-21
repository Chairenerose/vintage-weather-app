import React, { useState } from 'react';
import axios from "axios";
import ForecastPreview from "./ForecastPreview";
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

    if (loaded && props.city === forecast.city.name) {
        return (

            <div className="Forecast">
                <div className={`forecastBackground forecastShowing-${showPop}`} style={{
                    backgroundImage: "url(../img/Sky.jpg)",
                    backgroundSize: "cover",
                    borderRadius: 7,
                    backgroundRepeat: "no-repeat"
                }}>
                    <div className="Popcast row">
                        <ForecastPreview data={forecast.list[0]} />
                        <ForecastPreview data={forecast.list[1]} />
                        <ForecastPreview data={forecast.list[2]} />
                        <ForecastPreview data={forecast.list[3]} />
                        <ForecastPreview data={forecast.list[4]} />
                        <ForecastPreview data={forecast.list[5]} />
                    </div>


                </div>
                <button onClick={() => managePop()}>See Forecast</button>
            </div>
        );
    } else {
        let apiKey = "b40b1170719118f550e945ff17d55d7a";
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
        axios.get(url).then(handleForecastResponse);

        return (
            null

        );
    }
}