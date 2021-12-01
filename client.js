const net = require("net");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('connect', () => {
    console.log('"Successfully connected to game server" ');
    conn.write('Name: HLW');
    // setTimeout(() => conn.write('Move: left'), 100);
    // const moveUp = timer => setInterval(() => conn.write('Move: up'), timer);
    // moveUp(500);
    // setTimeout(() => clearInterval(moveUp), 5000);
  });
  return conn;
};

module.exports = {net, connect};