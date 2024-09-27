import { React } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Form = () => {
  const [zipCode, setZipCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form has been submitted');
    setZipCode("")

    try {
      const weatherData = await axios.post('/', { zipCode })
      console.log(weatherData.data);
      navigate('/weather', { state: { data: weatherData.data } });

    } catch (error) {
      if (error) {
        alert("Invalid ZipCode. Please Check")
      }
    }

  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <form onSubmit={handleSubmit} action="">
        <input
          className="border border-black rounded-md"
          type="weather"
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
