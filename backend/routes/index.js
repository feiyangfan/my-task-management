const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../middleware/auth");

const Todo = require("../models/Todo");

router.get("/", ensureGuest, (req, res) => {
  res.send("Login");
});

// @desc to dashboard
// only get this when logged in
router.get("http://localhost:3000/dashboard", ensureAuth, async (req, res) => {
  // res.render("dashboard", { name: req.user.displayName });
  console.log("index.js redirect after auth");
  res.send(req.user);
  // try {
  //   const todos = await Todo.find({ user: req.user.id }).lean();
  //   res.send(todos);
  // } catch (error) {
  //   console.error(error);
  // }
});

module.exports = router;
