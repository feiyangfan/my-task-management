const express = require("express");
const axios = require("axios").default;
const router = express.Router();
require("dotenv").config({ path: "./config/config.env" });
const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

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
});

module.exports = router;
