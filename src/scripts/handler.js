const router = require("./router.js");
const fs = require("fs");
const path = require("path");
const url = require("url");
const spellData = require("../spells.json");
const spellFinder = require("./spellfinder.js").spellFinder;
const pullSpell = require("./spellfinder.js").pullSpell;

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
  fs.readFile(path.join(__dirname, "..", "spells.json"), (error, file) => {
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

const newSpellRoute = (req, res) => {
  const spellSearch = url.parse(req.url, true).query.search;
  // console.log(spellSearch);
  const returnSpells = spellFinder(spellSearch, spellData);
  // console.log(returnSpells);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(returnSpells));
};

const searchSpellRoute = (req, res) => {
  const spellName = url.parse(req.url, true).query.search;
  const returnSpellData = pullSpell(spellName, spellData);
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(returnSpellData));
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
  newSpellRoute,
  searchSpellRoute,
  handleSpellRoute,
  handlePublic,
  handle404
};
