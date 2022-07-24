const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid/v4');

const app = express();

const DUMMY_PRODUCTS = []; // not a database, just some in-memory storage for now

app.use(bodyParser.json());

// Port website will run on
app.listen(process.env.PORT || 5000);

// *** GET Routes - display pages ***
// config the routes: Routes tell the server what to do when a user goes to a certain URL in your website
// Root Route
app.get('/', function (req, res) {
    res.render('public/views/pages/index');
});