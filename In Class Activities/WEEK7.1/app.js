var express = require('express');
var path = require('path');
var fs = require('fs');

var app = express();

app.use(function (req, res, next) {
    console.log('Request IP:', req.baseUrl);
    console.log('Request Date:', new Date());
    next();
});

app.use(function (req, res, next) {
    var filePath = path.join(__dirname, 'static', req.url);
    fs.stat(filePath, function (err, fileinfo) {
        if (err) {
            next();
            return;
        }

        if(fileinfo.isFile()) {
            res.sendFile(filePath);
        } else {
            next();
        }
    });
});

app.listen(3000, function () {
    console.log('Server is running on port 3000');
});