const express = require('express');
const app = express();

app.get("/olivia", function(request, response) {
    response.send('Hello Olivia');
});
app.get("/users/:userid", function(req, res) {
    var userId = parseInt(req.params.userid);
    res.send('Hello User ' + userId + '!');
});

app.get("/search",function(req,res){
    if (req.query.q === "javascript-themed burrito") {
    }
});

app.use(function(request, response, next) {
    response.status(404).send('Page not found');
});

app.listen(3000);