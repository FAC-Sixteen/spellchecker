const readFile = require("./readFile.js");

const handler = (req, res) => {
    const endpoint = req.url;
    readFile(endpoint, res);
    // if {
    //     res.writeHead(404, { "Content-Type" : "text/plain" });
    //     res.end("This page cannot be found in the Room of Requirement!");
    // }
}

module.exports = handler;