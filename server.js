
var express = require("express");
var bodyParser = require("body-parser");
var cors = require('cors')

var db  = require("./models");

var app = express();
var PORT = process.env.PORT || 8080;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(cors());



// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/restaurant-api-routes.js")(app);

require("./routes/html-routes.js")(app);
var routes = require("./controllers/restaurantsController.js")
app.use(routes)

// Syncing our sequelize models and then starting our Express app
// =============================================================

//force true: wipe out database every time when restart

db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
