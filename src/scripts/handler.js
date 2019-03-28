const fs = require("fs");
const path = require("path");

console.log("HI");

const handler = (req, res) => {
  const endpoint = req.url;
  console.log(endpoint);
  if (endpoint === "/") {
    fs.readFile(
      path.join(__dirname, "..", "..", "public", "index.html"),
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
    console.log("HI AGAIN");
    res.writeHead(200, { "Content-Type": "application/json" });
    fs.readFile(path.join(__dirname, "..", "spells.json"), (error, file) => {
      if (error) {
        console.log(error);
        return;
      }
      res.end(file);
    });
  } else if (endpoint[0] === "/") {
    console.log("aaa");
    const extension = endpoint.split(".")[1];
    const extensionType = {
      html: "text/html",
      css: "text/css",
      js: "application/javascript",
      jpg: "image/jpeg",
      png: "image/png"
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
    res.end("This page cannot be found in the Room of Requirement!");
  }
};

module.exports = handler;
