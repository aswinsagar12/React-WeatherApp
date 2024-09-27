const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");
require("dotenv").config();

// Application port and HostName configuration
const hostname = "localhost";
const PORT = process.env.PORT || 8080;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, hostname, () => {
  console.log(`The server is running on ${hostname}:${PORT}`);
});

// app.get("/", async (req, res) => {
//   const weather = await axios.get(
//     `https://api.openweathermap.org/data/2.5/weather?zip=20230,us&appid=${process.env.api_key}`
//   );
//   res.send(weather.data);
//   console.log(weather.data);
// });

app.post("/", async (req, res) => {
  console.log(req.body);
  const { zipCode } = req.body;
  if (zipCode.length < 5 || zipCode.length > 5) {
    return(res.status(400).json({ message: "Invalid Zip Code!!!" }))
  }else {

    const weather = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${process.env.api_key}`
    );
    res.send(weather.data);
    console.log(weather.data);
  }
});
