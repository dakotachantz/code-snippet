const express = require("express");
const homeRoutes = express.Router();
const User = require("../models/User");
const Snippet = require("../models/Snippet");
const bcrypt = require("bcryptjs");

homeRoutes.get("/", (req, res) => {
    User.findOne()
        .then(function (foundUser) {
            if (!foundUser) res.status(500).send("No User Found.");
            Snippet.find()
                .then(function (foundSnippets) {
                    if (!foundSnippets) res.status(500).send("No Snippets Found.");
                    return res.render("home", { user: foundUser, snippet: foundSnippets });
                })
        });

});

homeRoutes.post("/newsnippet", (req, res) => {
    let newSnippet = new Snippet(req.body);
    console.log(newSnippet);
    newSnippet.body = `${newSnippet.body}`;
    newSnippet
        .save()
        .then(function (savedSnippet) {
            console.log(savedSnippet.body);
            return res.redirect("/home");
        })
        .catch(function (err) {
            if (!savedSnippet) res.status(500).send("Error saving snippet!");
        });
});

module.exports = homeRoutes;