import React from "react";
import Weather from './Weather';

export default function Frame() {
    return (
        <div>
            <Weather />
            <form>
                <input type="search" placeholder="Enter a city..." className="form-control" />
                <input type="submit" value="Search" className="btn btn-dark" />
            </form>

        </div>



    );
}