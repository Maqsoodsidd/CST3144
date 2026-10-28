var http = require("http");
var helper = require("./helper");

function requestHandler(request, response) {
    console.log("Incoming Request to: " + request.url);

    var time = helper.getCurrentTime();
    var status = helper.getServerStatus();

    console.log("Current Time: " + time);

    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify({
        time: time,
        status: status
    }));
}

var server = http.createServer(requestHandler);
server.listen(5001);