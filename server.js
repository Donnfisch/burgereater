//this file creates our express connection and runs our node server

require('dotenv').config();

var express = require("express");
// var methodOverride = require('method-override')


var PORT = process.env.PORT || 3000;

var app = express();



// override with the X-HTTP-Method-Override header in the request
// app.use(methodOverride('X-HTTP-Method-Override'))




// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
