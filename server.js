const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
require("./db");

const app = express();
const bodyParser = require("body-parser");

const port = process.env.PORT || 8080;
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const authRouter = require("./router/auth");
const taskRouter = require("./router/task");

// REGISTER OUR ROUTES
app.use(authRouter);
app.use(taskRouter);

// START THE SERVER
app.listen(port);
