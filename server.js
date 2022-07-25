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
app.listen(process.env.PORT || 5000);

// *** GET Routes - display pages ***
// config the routes: Routes tell the server what to do when a user goes to a certain URL in your website
// Root Route
app.get('/', function (req, res) {
    res.render('pages/index');
});

app.get('/18', function(req, res) {
    res.render('pages/18', { });
 });
 app.get('/about', function(req, res) {
    res.render('pages/about', { });
 });
 app.get('/castle', function(req, res) {
    res.render('pages/castle', { });
 });
 app.get('/charles', function(req, res) {
    res.render('pages/charles', { });
 });
 app.get('/charlotte', function(req, res) {
    res.render('pages/charlotte', { });
 });
 app.get('/cloud', function(req, res) {
    res.render('pages/cloud', { });
 });
 app.get('/comic1', function(req, res) {
    res.render('pages/comic1', { });
 });
 app.get('/comic2', function(req, res) {
    res.render('pages/comic2', { });
 });
 app.get('/comic3', function(req, res) {
    res.render('pages/comic3', { });
 });
 app.get('/comics', function(req, res) {
    res.render('pages/comics', { });
 });
 app.get('/corn', function(req, res) {
    res.render('pages/corn', { });
 });
 app.get('/dog', function(req, res) {
    res.render('pages/dog', { });
 });
 app.get('/fall', function(req, res) {
    res.render('pages/fall', { });
 });
 app.get('/field', function(req, res) {
    res.render('pages/field', { });
 });
 app.get('/front', function(req, res) {
    res.render('pages/front', { });
 });
 app.get('/horse', function(req, res) {
    res.render('pages/horse', { });
 });
 app.get('/jerry', function(req, res) {
    res.render('pages/jerry', { });
 });
 app.get('/lake', function(req, res) {
    res.render('pages/lake', { });
 });
 app.get('/landscapes', function(req, res) {
    res.render('pages/landscapes', { });
 });
 app.get('/me', function(req, res) {
    res.render('pages/me', { });
 });
 app.get('/portraits', function(req, res) {
    res.render('pages/portraits', { });
 });
 app.get('/road', function(req, res) {
    res.render('pages/road', { });
 });
 app.get('/s1', function(req, res) {
    res.render('pages/s1', { });
 });
 app.get('/s2', function(req, res) {
    res.render('pages/s2', { });
 });
 app.get('/s3', function(req, res) {
    res.render('pages/s3', { });
 });
 app.get('/s4', function(req, res) {
    res.render('pages/s4', { });
 });
 app.get('/snippets', function(req, res) {
    res.render('pages/snippets', { });
 });
 app.get('/street', function(req, res) {
    res.render('pages/street', { });
 });
 app.get('/sunrise', function(req, res) {
    res.render('pages/sunrise', { });
 });
 app.get('/sunset', function(req, res) {
    res.render('pages/sunset', { });
 });
 app.get('/tree', function(req, res) {
    res.render('pages/tree', { });
 });
 app.get('/winter', function(req, res) {
    res.render('pages/winter', { });
 });
 app.get('/winter2', function(req, res) {
    res.render('pages/winter2', { });
 });
 app.get('/xian', function(req, res) {
    res.render('pages/xian', { });
 });
 app.get('/yoyo', function(req, res) {
    res.render('pages/yoyo', { });
 });
 app.get('/yunnan', function(req, res) {
    res.render('pages/yunnan', { });
 });
 app.get('/zebra', function(req, res) {
    res.render('pages/zebra', { });
 });