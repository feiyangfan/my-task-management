const express = require("express");
const passport = require("passport");
const router = express.Router();

// @desc Google Auth
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// Google Auth callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
    successRedirect: "http://localhost:3000/dashboard",
  })
  // (req, res) => {
  //   res.redirect("http://localhost:3000/dashboard#");
  //   console.log("logged in");
  // }
);

router.get("/login/success", (req, res) => {
  console.log("login success");
  if (req.user) {
    res.json({
      message: "User Authenticated",
      user: req.user,
    });
  } else
    res.status(400).json({
      message: "User Not Authenticated",
      user: null,
    });
});

// #desc User logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
