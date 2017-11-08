var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');

var app = express();
app.use(express.static(__dirname + "/public"));

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

var routes = require('./controllers/routes.js');
var burger = ("./models/burger.js")

app.set("view engine", "handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));

app.use('/', routes);

app.listen(port, function() {
  console.log("listening on port", port);
});