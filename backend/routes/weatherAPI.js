var express = require("express");
var request = require("request");
var router = express.Router();

/* GET users listing. */
router.post("/", (req, res) => {
  console.log(req.body.query);
  const city = req.body.query;
  request(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=ec9bb1eaae55cb44b0ecbaae5c4a7280`,
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        const parsedBody = JSON.parse(body);
        console.log(parsedBody);
        res.send(parsedBody);
      }
    }
  );
});

module.exports = router;
