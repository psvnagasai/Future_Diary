var express = require('express');
var morgan = require('morgan');
const bodyParser = require('body-parser');
var app = express();
const http = require('http');
const connection = require("./app/db")
const routeController = require("./app/controllers/userFunctions.js");
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(morgan('dev'));
app.use(express.static('./public')); //For the images, stylesheets, etc. THE STATIC FILES
app.set('view engine', 'ejs'); //Setting up template engine, FOR THE FRONTEND


app.use("/", routeController);

const server = http.createServer(app);
// require('./app/routes')(app);
app.listen(8081, function () {
   console.log("Example app listening ")
});






