var express = require("express")
var path = require("path");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars")
var cheerio = require("cheerio")
var request = require("request")
// Require all models
var db = require("../models");

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytscraper";

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

var routes = express.Router();

routes.get("/", function(req, res) {
    db.Article.find({})
    .then(function(dbArticle) {
        var display = {articles:dbArticle};
        res.render("index", display);
    });
});

routes.get("/note", function(req, res) {
    db.Note.find({})
    .then(function(dbNote){
        res.json(dbNote);
    })
    .catch(function(err){
        res.json(err);
    });
});


routes.get("/note/:id", function(req,res) {
    db.Article.findById(req.params.id)
    .populate("note")
    .then(function(dbNote) {
        res.json(dbNote);
    });
});

routes.post("/note/:id", function(req, res) {
    db.Note.create(req.body)
    .then(function(dbNote){
        return db.Article.findOneAndUpdate({}, { $push: { note: dbNote._id } }, { new: true });
    })
    .then(function(newNote){
        console.log(newNote);
        res.json(newNote);
    })
    .catch(function(err) {
        res.json(err);
    });
});

