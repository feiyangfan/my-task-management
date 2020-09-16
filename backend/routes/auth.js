const express = require("express");
const passport = require("passport");
const router = express.Router();

// @desc Google Auth
router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

// Google Auth callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/");
  }
);

// #desc User logout
router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
