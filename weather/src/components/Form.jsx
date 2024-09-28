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
    <div className="w-full h-[100vh] flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <input
          className="border border-black rounded-md"
          type="text"
          onChange={(e) => setZipCode(e.target.value)}
          value={zipCode}
          required
          placeholder='Enter ZipCode'
        />
        <button className="rounded-md bg-green-500">Search</button>
      </form>
    </div>
  );
};

export default Form;