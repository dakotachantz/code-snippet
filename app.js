// DECLARE VARIABLES
const express = require("express");
const mustacheExpress = require("mustache-express");
const session = require("express-session");
const logger = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const sessionConfig = require("./sessionConfig");
const checkAuth = require("./middleware/checkAuth");
const homeRoutes = require("./routes/homeRoutes");
const authRoutes = require("./routes/authRoutes");
const mongoose = require("mongoose");
const bluebird = require("bluebird");
const app = express();

mongoose.Promise = bluebird;
mongoose.connect("mongodb://localhost:27017/code-snippet");

// TEMPLATING ENGINE
app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

// MIDDLEWARE
app.use(express.static(path.join(__dirname, "./public")));
app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session(sessionConfig));

// ROUTES
app.use("/", authRoutes);
app.use("/home", checkAuth, homeRoutes);

module.exports = app;