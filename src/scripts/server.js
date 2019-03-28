const http = require("http");
// const port = 1989;
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
const router = require('./router');
const server = http.createServer(router);

server.listen(port);

console.log(`We have apparated onto port ${port}!`);