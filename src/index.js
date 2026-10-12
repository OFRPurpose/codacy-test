function greet(name) {
  var msg = "Hello, " + name + "!";
  console.log(msg);
  return msg;
}

function add(a, b) {
  var result = a + b;
  return result;
}

module.exports = { greet, add };
