const http = require ("http")
const url = require ("url")
const {createGreeting} = require ("./greeting");

http.createServer ((req,res) ={
                   console.log(req.url);
  const parseurl = url.parse{req.url,true);
  const {first,last} parseurl.query;
  const result = {
    greeting: createGreeting (first,last),
    path: parseUrl.pathname
  };

  res.writehead(200, {
    'Content-Type' : 'application/json'
  }):

res.end(JSON.stringify(result));

}).listen(3000, () = {
          console.log ('server running on port 3000');
  });
