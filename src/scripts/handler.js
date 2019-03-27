const fs = require("fs");
const path = require("path");

const handler = (req, res) => {
    const endpoint = req.url;
    if (endpoint === "/") {
        fs.readFile(path.join(__dirname, "..", "..", "public", "index.html"), (error, file) => {
            if (error) {
                console.log(error);
                return;
            }
            res.writeHead(200, { "Content-Type" : "text/html" });
            res.end(file);
        });
    }
    else {
        res.writeHead(404, { "Content-Type" : "text/plain" });
        res.end("This page cannot be found in the Room of Requirement!");
    }
}

module.exports = handler;