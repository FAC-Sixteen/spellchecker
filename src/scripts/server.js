const http = require("http");
const port = 1989;
const router = require('./router');
const server = http.createServer(router);

server.listen(port);

console.log(`We have apparated onto port ${port}!`);