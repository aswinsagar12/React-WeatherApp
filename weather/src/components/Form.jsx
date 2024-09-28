import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../config';  // Import the config

const Form = () => {
  const [zipCode, setZipCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted with zipCode:', zipCode);
    setZipCode("");

    try {
      // Use the apiUrl from config
      console.log('Sending request to:', `${config.apiUrl}/`);
      const weatherData = await axios.post(`${config.apiUrl}/`, { zipCode });
      console.log('Received response:', weatherData.data);
      navigate('/weather', { state: { data: weatherData.data } });
    } catch (error) {
      if (error) {
        alert("Invalid ZipCode! Please Check");
        console.error('Error details:', error.response || error);
      }
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <h1 className="text-xl font-bold mb-6 flex justify-between items-center">
          TODAY'S WEATHER
          <span className="flex">
            <span className="w-4 h-4 bg-black mr-1"></span>
            <span className="w-4 h-4 bg-black mr-1 rounded-full"></span>
            <span className="w-4 h-4 bg-black border-2 border-black" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'}}></span>
          </span>
        </h1>
        <form onSubmit={handleSubmit} className="flex">
          <div className="flex-grow">
            <label htmlFor="zipCode" className="block text-xs font-bold mb-1">ENTER ZIP CODE</label>
            <input
              id="zipCode"
              className="w-full border-2 border-black p-2 text-xl"
              type="text"
              onChange={(e) => setZipCode(e.target.value)}
              value={zipCode}
              required
              placeholder="Enter zip code"
            />
          </div>
          <button
            className="bg-lime-400 border-2 border-black ml-2 px-4 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
            type="submit"
          >
            <span className="transform -rotate-45">→</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;