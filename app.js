var express = require('express');
var app = express();
const PORT = 8081;

var helloRouter = require('./routes/hello');

app.use('/hello', helloRouter);

module.exports = app;

app.listen(PORT, ()=>{console.log('listening in port ', PORT);});