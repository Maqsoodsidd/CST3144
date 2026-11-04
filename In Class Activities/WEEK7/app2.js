const express = require('express');
const http = require('http');
const app = express();

app.use(function(request,response, next) {
    console.log('Incoming Request: ' + request.method + "to" + request.url);
    next();
});
app.use(function(request,response,next) {
    var minute = new Date().getMinutes();
    if (minute % 2 === 0) {
        next();
    } else {
        response.statusCode=403;
        response.end('Not Authorized');
    }
});
app.use(function(request,response) {
    response.end('Secret info : the password is 1234');
});  

http.createServer(app).listen(3000);