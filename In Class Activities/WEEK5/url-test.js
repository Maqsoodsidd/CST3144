var url = require("url");
var parsedURL = url.parse("http://www.example.com/profile?name=barry");
console.log(parsedURL.protocol); // "http:"
console.log(parsedURL.host); // "www.example.com"
console.log(parsedURL.query); // "name=barry"

var mustache = require("mustache");
var result = mustache.render("Hi, {{first}} {{last}}!", {
first: "Nicole",
last: "Kidman"
});
console.log(result); // "Hi, Nicole Kidman!"