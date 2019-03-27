const handler = require('./handler.js');
const http = require("http");
const server = http.createServer(handler);
const port = 1989;

server.listen(port);

console.log(`We have apparated onto port ${port}!`);

module.exports = server;