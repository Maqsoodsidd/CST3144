const http = require('http');

const lessons = [
    { topic: 'math', location: 'London', price: 100 },
    { topic: 'math', location: 'Liverpool', price: 80 },
    { topic: 'math', location: 'Oxford', price: 90 },
    { topic: 'math', location: 'Bristol', price: 120 }
];

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(lessons));
}).listen(4001);

console.log('Server running at http://localhost:4001');