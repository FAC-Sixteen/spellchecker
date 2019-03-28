const newhandler = require('./handler.js');

const router = (req, res) => {

const endpoint = req.url;

if (endpoint === "/") {
    newhandler.handleHomeRoute(req, res);
} 
else if (endpoint === "/spells") {
    newhandler.handleSpellRoute(req, res);
} 
else if (endpoint[0] === "/") {
    newhandler.handlePublic(req, res);
}
else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("This page cannot be found in the Room of Requirement!");
}
}

module.exports = router;