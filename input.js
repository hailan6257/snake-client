// Stores the active TCP connection object.
let connection;
const handleUserInput = (key) => {
  //const moveK = m => setInterval(() => connection.write(m), 100);
  const moveT = (starter, move, ender) => {
    do {
      setTimeout(() => connection.write(move),starter);
      starter += 3;
    } while (starter < ender);
  };
  if (key === 'a') moveT(0, "Move: left", 30);
  if (key === 'w') moveT(0, "Move: up", 30);
  if (key === 'd') moveT(0, "Move: right", 30);
  if (key === 's') moveT(0, "Move: down", 30);
  if (key === '\u0003') process.exit();
};
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = {setupInput};