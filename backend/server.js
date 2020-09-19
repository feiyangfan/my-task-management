const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);
const connectDB = require("./config/db");

const PORT = process.env.PORT || 9000;

//load config
require("dotenv").config({ path: "./config/config.env" });

//passport config
require("./config/passport")(passport);
connectDB();

const app = express();
app.use(cors());

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
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
);

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/", require("./routes/index"));
app.use("/weather", require("./routes/weather"));
app.use("/auth", require("./routes/auth"));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

module.exports = app;
