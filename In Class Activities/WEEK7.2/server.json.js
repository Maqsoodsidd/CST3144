const http = require('http');
const port = 3000;

const courses = [
    { "topic": "math", "location": "hendon", "price": "100" },
    { "topic": "math", "location": "colindale", "price": "150" },
    { "topic": "math", "location": "brent cross", "price": "200" },
    { "topic": "math", "location": "golders cross", "price": "250" },
];

http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(JSON.stringify(courses));
}).listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});