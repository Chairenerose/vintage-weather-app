import React from "react";
import Dateinfo from './Dateinfo';
import WeatherTemperature from './WeatherTemperature';

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
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

                    <h1>{props.data.city}</h1>
                    <ul>
                        <li><Dateinfo date={props.data.date} /></li>
                        <li>{props.data.description}</li>
                    </ul>

                    <div className="row">

                        <div className="col-6">
                            <img src={props.data.iconUrl} alt={props.data.description} />
                            <WeatherTemperature celsius={props.data.temperature} />
                        </div>

                        <div className="col-6">
                            <ul>
                                <li> <i className="fas fa-cloud-showers-heavy"></i> Precipitation: {props.data.precipitation}%</li>
                                <li> <i className="fas fa-tint"></i> Humidity: {props.data.humidity}%</li>
                                <li> <i className="fas fa-wind"></i> Wind: {props.data.wind} km/h</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}