const express = require("express");
const homeRoutes = express.Router();
const User = require("../models/User");
const Snippet = require("../models/Snippet");
const bcrypt = require("bcryptjs");

homeRoutes.get("/", (req, res) => {
  Snippet.find().then(function(foundSnippets) {
    if (!foundSnippets) res.status(500).send("No Snippets Found.");
    return res.render("home", {
      user: req.session.user,
      snippet: foundSnippets
    });
  });
});

homeRoutes.post("/newsnippet", (req, res) => {
  let newSnippet = new Snippet(req.body);
  console.log(newSnippet);
  newSnippet.body = `${newSnippet.body}`;
  newSnippet
    .save()
    .then(function(savedSnippet) {
      return res.redirect("/home");
    })
    .catch(function(savedSnippet) {
      if (!savedSnippet) res.status(500).send("Error saving snippet!");
    });
});

homeRoutes.get("/:lang", (req, res) => {
  Snippet.find({ language: req.params.lang }).then(snippets => {
    if (!snippets) res.status(500).send(`No ${req.params.lang} snippets`);
    return res.render("home", { user: req.session.user, snippet: snippets });
  });
});

homeRoutes.post("/getsnippetsbytag", (req, res) => {
  let reqTags = [req.body.tags];
  Snippet.find({ tags: { $in: reqTags } }).then(snippets => {
    if (!snippets) res.status(500).send(`No ${req.body} snippets`);
    return res.render("home", { user: req.session.user, snippet: snippets });
  });
});

module.exports = homeRoutes;
