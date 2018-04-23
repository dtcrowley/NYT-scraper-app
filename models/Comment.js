var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new commentSchema object
var commentSchema = new Schema({
  // `title` is of type String
  title: String,
  // `body` is of type String
  body: String
});

// This creates our model from the above schema, using mongoose's model method
var Comment = mongoose.model("Comment", commentSchema);

// Export the Comment model
module.exports = Comment;

// var express = require("express")
// var path = require("path");
// var mongoose = require("mongoose");
// var bodyParser = require("body-parser");
// var exphbs = require("express-handlebars")
// var cheerio = require("cheerio")
// var request = require("request")
// var request = require("mongojs");
// // Require all models
// var db = require("../models");

// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/nytscraper";

// mongoose.Promise = Promise;
// mongoose.connect(MONGODB_URI);

// var routes = express.Router();

// routes.get("/", function(req, res) {
//     db.Article.find({})
//     .then(function(dbArticle) {
//         var display = {articles:dbArticle};
//         res.render("index", display);
//     });
// });

// routes.get("/note", function(req, res) {
//     db.Note.find({})
//     .then(function(dbNote){
//         res.json(dbNote);
//     })
//     .catch(function(err){
//         res.json(err);
//     });
// });


// routes.get("/note/:id", function(req,res) {
//     db.Article.findById(req.params.id)
//     .populate("note")
//     .then(function(dbNote) {
//         res.json(dbNote);
//     });
// });

// routes.post("/note/:id", function(req, res) {
//     db.Note.create(req.body)
//     .then(function(dbNote){
//         return db.Article.findOneAndUpdate({}, { $push: { note: dbNote._id } }, { new: true });
//     })
//     .then(function(newNote){
//         console.log(newNote);
//         res.json(newNote);
//     })
//     .catch(function(err) {
//         res.json(err);
//     });
// });

// routes.get("/scrape"), function(req, res) {
//     var $ = cheerio.load(html)

//     $("article .story-heading").each(function(i, element) {
        
//         var title = $(element).find("")

//     })
// }