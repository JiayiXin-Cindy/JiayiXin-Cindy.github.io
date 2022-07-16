// Load Node modules
var express = require('express');
//add the EJS Node module to our server
const ejs = require('ejs');
// Initialise Express
var app = express();
// Render static files
app.use(express.static('public'));
// Set the view engine to ejs/ tell our Express server to use EJS
app.set('view engine', 'ejs');
// Port website will run on
app.listen(jiayixin-cindy.github.io);

// *** GET Routes - display pages ***
// config the routes: Routes tell the server what to do when a user goes to a certain URL in your website
// Root Route
app.get('/', function (req, res) {
    res.render('pages/index');
});