import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState('celsius')
    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit")
    }

    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius")
    }

    if (unit === "celsius") {
        return (
            <span>
                <span className="temperature">{Math.round(props.celsius)}</span><span>°C|<a href="/" onClick={convertToFahrenheit}>°F</a></span>
            </span>
        );
    } else {
        let fahrenheit = (props.celsius * 9 / 5) + 32;

        return (
            <span>
                <span className="temperature">{Math.round(fahrenheit)}</span><span><a href="/" onClick={convertToCelsius}>°C</a> | °F</span>
            </span>
        )
    }

}