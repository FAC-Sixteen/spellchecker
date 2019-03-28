const fs = require("fs");
const path = require("path");

const handler = (req, res) => {
  const endpoint = req.url;
  if (endpoint === "/") {
    fs.readFile(
      path.join(__dirname, "..", "..", "public", "index.html"), "utf8",
      (error, file) => {
        if (error) {
          console.log(error);
          return;
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(file);
      }
    );
  } else if (endpoint === "/spells") {
    res.writeHead(200, { "Content-Type": "application/json" });
    fs.readFile(path.join(__dirname, "..", "spells.json"), 'utf8', (error, file) => {
      if (error) {
        console.log(error);
        return;
      }
      res.end(file);
    });
  } else if (endpoint[0] === "/") {
    const extension = endpoint.split(".")[1];
    const extensionType = {
      html: "text/html",
      css: "text/css",
      js: "application/javascript",
      jpg: "image/jpeg",
      png: "image/png",
      ico: "image/x-icon"
    };
    fs.readFile(__dirname + "/../../public" + endpoint, (error, file) => {
      if (error) {
        console.log(error);
        return;
      } else {
        res.writeHead(200, { "Content-Type": extensionType[extension] });
        res.end(file);
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("This page cannot be found in the Room of Requirement!"); //https://media.giphy.com/media/aE5XR1Az7sw3m/giphy.gif
  }
};

module.exports = handler;
