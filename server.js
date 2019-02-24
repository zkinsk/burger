var express = require("express");
var app = express();

// setup handlebars which I use to make a list of all friends in the database as well as their image and answers to the survey quetions
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// This is the port that the express surver is going to listen to
var PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static(__dirname + '/public'));
require("./routing/apiRoutes")(app);



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});