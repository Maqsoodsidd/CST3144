var http = require("http");
var randomNumber = require("./randomNumber");
var chalk = require("chalk");

function requestHandler(request, response) {
    console.log("Incoming Request to: " + request.url);

    var number = randomNumber();
    if (number <= 33) {
        console.log(chalk.green(number));
    }

    else if (number <= 66) {
        console.log(chalk.yellow(number));
    }

    else {
        console.log(chalk.red(number));
    }

    response.writeHead(200, {'Content-Type': 'application/json'});
    response.end(JSON.stringify({
        number: number
    }));
}

var server = http.createServer(requestHandler);
server.listen(3000);