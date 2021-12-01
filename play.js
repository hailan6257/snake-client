const {connect} = require('./client');//should require file name not function name
console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin
const handleUserInput = () => {
  process.stdin.on('data', (key) => {
    if (key === '\u0003') process.exit();
  });
};
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
setupInput();

