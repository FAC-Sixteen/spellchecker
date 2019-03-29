const router = require("./router.js");
const fs = require("fs");
const path = require("path");

const handleHomeRoute = (req, res) => {
  fs.readFile(
    path.join(__dirname, "..", "..", "public", "index.html"),
    (error, file) => {
      if (error) {
        console.log(error);
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("<h1>Sorry, we're currently lost in the Forbidden Forest</h1>");
      }
      res.writeHead(200, {
        "Content-Type": "text/html"
      });
      res.end(file);
    }
  );
};

const handleSpellRoute = (req, res) => {
  fs.readFile(path.join(__dirname, "..", "spell.json"), (error, file) => {
    if (error) {
      console.log(error);
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("<h1>Sorry, we're currently lost in the Forbidden Forest</h1>");
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(file);
    }
  });
};

const handlePublic = (req, res) => {
  const endpoint = req.url;
  const extension = endpoint.split(".")[1];
  const extensionType = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    jpg: "image/jpeg",
    png: "image/png",
    ico: "image/x-icon",
    TTF: "font/ttf"
  };

  fs.readFile(path.join(__dirname, "../..", endpoint), (error, file) => {
    if (error) {
      console.log(error);
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("<h1>Sorry, we're currently lost in the Forbidden Forest</h1>");
    } else {
      res.writeHead(200, {
        "Content-Type": extensionType[extension]
      });
      res.end(file);
    }
  });
};

const handle404 = (req, res) => {
  fs.readFile(
    path.join(__dirname, "../../public/error.html"),
    (error, file) => {
      if (error) {
        console.log(error);
        res.writeHead(500, { "Content-Type": "text/html" });
        res.end("<h1>Sorry, we're currently lost in the Forbidden Forest</h1>");
      } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(file);
      }
    }
  );
};

module.exports = {
  handleHomeRoute,
  handleSpellRoute,
  handlePublic,
  handle404
};
