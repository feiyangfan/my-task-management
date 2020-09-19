const express = require("express");
const axios = require("axios").default;
const router = express.Router();
require("dotenv").config({ path: "./config/config.env" });
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

const getRequest = async (city) => {
  console.log(city);
  let res = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${WEATHER_API_KEY}`
  );

  let data = res.data;
  return data;
};

router.post("/", (req, res) => {
  console.log(req.body);
  const city = req.body.city;

  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${WEATHER_API_KEY}`
    )
    .then((resp) => {
      console.log(resp.data);
      res.send(resp.data);
    });
  // axios.get(
  //   `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${WEATHER_API_KEY}`,
  //   function (error, response, body) {
  //     console.log(response);
  //     console.log(body);
  //     if (!error && response.statusCode == 200) {
  //       const parsedBody = JSON.parse(body);
  //       console.log(parsedBody);
  //       res.send(parsedBody);
  //     }
  //   }
  // );
});

module.exports = router;
