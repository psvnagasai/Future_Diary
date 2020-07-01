var express = require('express');
var morgan = require('morgan');
const bodyParser = require('body-parser');
var app = express();
const http = require('http');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(morgan('dev'));

app.get('/', function (req, res) {
   res.send('Hello World');
})

const server = http.createServer(app);
require('./app/routes')(app);
app.listen(8081, function () {
   
   console.log("Example app listening ")
});
