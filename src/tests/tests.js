const test = require("tape");
const handler = require("../scripts/handler");

const endpoints = [
    { url: "/", status_code: 200, body: 'view = "expelliarmus!"'},
    { url: "/style.css", status_code: 200},
    { url: "/spells", status_code: 200, body: '[{'}
];

test(`GET ${endpoint.url} should return status code ${endpoint.status_code}`, (t) => {
    handler(
        { url: endpoint.url},
        { writeHead: (status, _content) => {
            t.equal(status, endpoint.status_code);
        },
    end: body => {
        t.ok(endpoint.body ? body.includes(endpoint.body) : body);
    }}
    )
    t.end();
});