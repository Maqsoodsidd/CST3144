const mustache = require ("mustache");
function createGreeting(first,last) {
  return mustache.render(
    'Hi, {{first}} {{last}}! Welcome to the server.'
    {first,last}
  );
}
module.exports = {createGreeting};
