const express = require("express");
const jwt = require("jsonwebtoken");
const router = new express.Router();

// @route POST /login
// @desc User log in
// @access public
router.post("/login", (req, res) => {
  try {
    const username = req.body.username;
    const token = generateAuthToken(username);
    res.send({ username, token });
  } catch (error) {
    console.log(error);
    res.status(400).send("Login failed.");
  }
});

function generateAuthToken(username) {
  return jwt.sign(username, process.env.TOKEN_SECRET);
}

module.exports = router;
