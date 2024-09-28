import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './Weather.css'; // Make sure to create this CSS file

const Weather = () => {
    const location = useLocation();
    const { state } = location;
    const navigate = useNavigate();

    const backToHome = () => {
        navigate(-1);
    }

    if (!state) {
        return <div>No data available</div>;
    }

    const { data } = state;

    console.log(data);

    return (
        <>
            <div className='weather-container'>
                <h1 className='location'>{data.name}, {data.sys.country}</h1>
                {/* <div className='weather-description'>
                    <h3>{data.weather[0].description}</h3>
                </div> */}
                <div className='weather-details'>
                    <h1>Temp: {data.main.temp}°F </h1>
                    <h1>Humidity: {data.main.humidity}%</h1>
                    <h1>Feels Like: {data.main.feels_like} °F</h1>
                </div>
                <div className='back-button-container'>
                    <button onClick={backToHome} className='back-button'>
                        <h1>Back</h1>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Weather;