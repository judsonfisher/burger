var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var burgerControllers = require('./controllers/burgers_controllers.js');
var burger = ("./models/burger.js")

var app = express();
var port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// app.get function

app.use("/api/burgers", burgerControllers);

app.listen(port, function() {
  console.log("listening on port", port);
});