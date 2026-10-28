var http = require ("http");
function requestHandler(request, response) {
    console.log("Incoming Request to: " +request.url);
    response.end("Hello World!");
}
var server = http.createServer(requestHandler);
server.listen(4001);