const express = require("express");
const homeRoutes = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

homeRoutes.get("/", (req, res) => {
    User.findOne()
        .then(function (foundUser) {
            if (!foundUser) res.status(500).send("No User Found.");
            res.render("home", { user: foundUser });
        });
});

module.exports = homeRoutes;