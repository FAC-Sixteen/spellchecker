const handler = require("./handler.js");

const router = (req, res) => {
  const endpoint = req.url;
  console.log(endpoint);

  if (endpoint === "/") {
    handler.handleHomeRoute(req, res);
  } else if (endpoint.includes("/spells")) {
    handler.newSpellRoute(req, res);
  } else if (endpoint.includes("/search")) {
    handler.searchSpellRoute(req, res);
  } else if (endpoint === "/spells") {
    handler.handleSpellRoute(req, res);
  } else if (endpoint.includes("public")) {
    handler.handlePublic(req, res);
  } else {
    handler.handle404(req, res);
  }
};

module.exports = router;
