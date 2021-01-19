const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 8080;
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const authRouter = require('./router/auth')

// REGISTER OUR ROUTES
app.use(authRouter);

// START THE SERVER
app.listen(port);
