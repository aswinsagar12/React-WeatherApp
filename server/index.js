const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");

require("dotenv").config();

// Application port and HostName configuration
const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';

app.use(cors({
  origin: '*'
}));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Adjust as necessary
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('trust proxy', 1);



app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});

// app.get("/", async (req, res) => {
//   const weather = await axios.get(
//     `https://api.openweathermap.org/data/2.5/weather?zip=20230,us&appid=${process.env.api_key}`
//   );
//   res.send(`<h1>Hello From WeatherServer</h1>`);
//   console.log(weather.data);
// });
// app.get('/', (req, res) => {
//   res.send('Hello from the weather backend!');
// });

app.post("/", async (req, res) => {
  console.log('Received request with body:', req.body);
  const { zipCode } = req.body;

  // Validate zip code length
  if (zipCode.length !== 5) {
    return res.status(400).json({ message: "Invalid Zip Code!!!" });
  }

  try {
    // Attempt to fetch weather data
    const weather = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${process.env.api_key}`
    );

    // Send the weather data as response
    console.log('Sending response:', weather.data);
    return res.json(weather.data);

  } catch (error) {
    // Handle errors from the API call
    console.error('Error fetching weather data:', error.message);

    // Check if the error is due to a network issue or API response
    if (error.response) {
      // The request was made and the server responded with a status code
      return res.status(error.response.status).json({ message: error.response.data.message || "Error fetching data" });
    } else if (error.request) {
      // The request was made but no response was received
      return res.status(500).json({ message: "No response received from weather service" });
    } else {
      // Something happened in setting up the request that triggered an Error
      return res.status(500).json({ message: "Error in request setup" });
    }
  }
});
