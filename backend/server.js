const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 9000;

//load config
require("dotenv").config({ path: "./config/config.env" });

//passport config
require("./config/passport")(passport);
connectDB();

const app = express();

//logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Session middleware
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use("/", require("./routes/index"));
app.use("/weather", require("./routes/weather"));
app.use("/auth", require("./routes/auth"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

module.exports = app;
