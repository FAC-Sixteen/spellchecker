const fs = require('fs');
const path = require('path');

const readFile = (variable, res) => {

    let placeholder = path.basename(variable); 
    if (variable == '/') {
        placeholder = "index";
    }
    if (!path.extname(variable)) {
        placeholder += ".html";
    }

    const object = { 
        ".html" : "text/html",
        ".css" : "text/css",
        ".js" : "text/javascript",
        ".png" : "image/png",
        ".jpg" : "image/jpeg",
        ".jpeg" : "image/jpeg",
        ".ico" : "image/x-icon"
       }

    const prop = path.extname(placeholder);

    fs.readFile(path.join(__dirname, "..", "..", "public", placeholder), "utf8", (err, file) => {
        if (err) {
        res.writeHead(500, {'content-type': 'text/plain'});
        res.end('server error');
        console.log("server", err);
    } else {
        res.writeHead(200, {"content-type": object[prop]});
        console.log(placeholder);
        console.log(path.join(__dirname, "..", "..", "public", placeholder));
        console.log(object[prop]);
        res.end(file);
    }
    });
}

module.exports = readFile;