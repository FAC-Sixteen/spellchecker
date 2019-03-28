    const router = require('./router.js');
    const fs = require("fs");
    const path = require("path");

    const handleHomeRoute = (req, res) => {
        fs.readFile(
            path.join(__dirname, "..", "..", "public", "index.html"),
            (error, file) => {
                if (error) {
                    console.log(error);
                    return;
                }
                res.writeHead(200, {
                    "Content-Type": "text/html"
                });
                res.end(file);
            }
        );
    }

    const handleSpellRoute = (req, res) => {
        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        fs.readFile(path.join(__dirname, "..", "spells.json"), (error, file) => {
            if (error) {
                console.log(error);
                return;
            }
            res.end(file);
        });
    }

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
                return;
            } else {
                res.writeHead(200, {
                    "Content-Type": extensionType[extension]
                });
                res.end(file);
            }
        });
    }

    const handle404 = (req, res) => {
        fs.readFile(path.join(__dirname, "../../public/error.html"), (error, file) => {
            if (error) {
                console.log(error);
                return;
            }
            else {
            res.writeHead(404, { "Content-Type": "text/html" });
        res.end(file);
            }
        })
    }

    module.exports = {
        handleHomeRoute,
        handleSpellRoute,
        handlePublic,
        handle404
    }