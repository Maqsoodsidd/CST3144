const express = require('express');
const http = require('http');
const app = express();

app.use(function(request,response, next) {
    console.log('Incoming Request: ' + request.method + "to" + request.url);
    next();
});
app.use(function(request,response) {
    response.writeHead(200,{ 'Content-Type': 'text/plain'});
    response.end('Hello World');
});

http.createServer(app).listen(3000);