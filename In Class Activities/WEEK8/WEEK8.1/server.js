const http = require('http');
const url = require('url');
const { createGreeting } = require('./greeting');

http.createServer((req, res) => {
  console.log(req.url);

  const parsedUrl = url.parse(req.url, true);
  const { first, last } = parsedUrl.query;

  const result = {
    greeting: createGreeting(first, last),
    path: parsedUrl.pathname
  };

  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(JSON.stringify(result));

}).listen(3000, () => {
  console.log('Server running on port 3000');
});