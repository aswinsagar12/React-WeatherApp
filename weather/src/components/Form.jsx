import { React } from "react";
import { useState } from "react";
import { axios } from "react";
const Form = () => {
  const [zipCode, setZipCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setZipCode("")
    console.log('Form has been submitted');

    const weatherData = await axios.post('/', {zipCode})
    console.log(weatherData.data);

  };

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <form onSubmit={handleSubmit} action="">
      <input
        className="border border-black rounded-md"
        type="weather"
        onChange={(e) => setZipCode(e.target.value)}
        value={setZipCode}
      />
      <button className="rounded-md bg-green-500">Search</button>
    </form>
    </div>
  );
};

export default Form;
