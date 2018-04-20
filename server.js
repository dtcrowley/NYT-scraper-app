var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars")
var cheerio = require("cheerio");

var PORT = process.env.PORT || 3000;

var app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

mongoose.connect("mongodb://localhost/nyt-scraper")

app.use(require("./routes/apiRoutes"));
// app.use(require("./routes/htmlRoutes"));
// app.use(require("./routes/scrapeRoutes"));

app.get("/nyt-scraper", function(req, res) {
    var url = "www.nytimes.com";
    request(url, function(err, res, html){
        var $ = cheerio.load(html);
       
    })
})


app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });