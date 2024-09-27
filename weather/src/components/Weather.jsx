import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Weather = () => {
    const location = useLocation();
    const { state } = location;
    const navigate = useNavigate();

    const backToHome = () => {
        navigate(-1);
    }

    // Add a check to ensure state exists before destructuring
    if (!state) {
        return <div>No data available</div>;
    }

    const { data } = state;

    console.log(data);

    return (
        <>
            <div className='w-full h-[100vh]'>
                {/*
      {data.weather[0].description} */}
                <h1 className='text-[10vmin] font-bold text-center p-5'>{data.name}, {data.sys.country}</h1>
                <div className='w-full h-[40vh] flex flex-col justify-center items-center'>
                    {/* <img key={data.id} src={icon_url} alt={data.weather[0].main} /> */}
                    <h3 className='text-center pt-5 font-bold text-[3.5vmin]'>{data.weather[0].description}</h3>
                </div>
                <div className='flex flex-row justify-around p-5 h-[25vh]'>
                    <h1 className='text-[3vmin] font-bold'>Temp: {data.main.temp}°F </h1>
                    <h1 className='text-[3vmin] font-bold'>Humidity: {data.main.humidity}%</h1>
                    <h1 className='text-[3vmin] font-bold'>Feels Like: {data.main.feels_like} °F</h1>
                </div>
                <div className='text-center'>
                    <button onClick={backToHome} className=' bg-yellow-500 p-2 rounded-md'><h1 className='text-[3vmin]'>Back</h1></button>
                </div>
            </div>
        </>
    )
}

export default Weather;
