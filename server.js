//setup express
var express = require('express');
var app = express();

//set up bodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

var path = require('path');

//setup views
app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

//start database
require('./server/config/mongoose.js');

//setup routes
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

//start port
app.listen(8000,function(){
    console.log('listenning port 8000');
});