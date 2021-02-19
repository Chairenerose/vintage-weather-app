import React from "react";
import Weather from './Weather';

export default function Frame() {


    return (
        <div className="WeatherLayout">
            <Weather defaultCity="Bahamas" />

        </div>



    );
}