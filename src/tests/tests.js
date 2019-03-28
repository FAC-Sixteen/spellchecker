const test = require("tape");
const handler = require("../scripts/handler");

const endpoints = [
    // { url: "/unknown", status_code: 404, body: "Room of Requirement"},
    { url: "/", status_code: 200, body: 'view = "expelliarmus!"'},
    { url: "/normalise.css", status_code: 200},
    { url: "/style.css", status_code: 200},
    { url: "/script.js", status_code: 200},
    { url: "/spells", status_code: 200, body: '"spell": "Expelliarmus"'}
];

endpoints.forEach(endpoint => {
    test(`GET ${endpoint.url} should return status code ${endpoint.status_code}`, (t) => {
        t.plan(2);
    handler(
        { url: endpoint.url},
        { writeHead: (status, _content) => {
            t.equal(status, endpoint.status_code);
        },
    end: body => {
        // console.log(body);
        t.ok(endpoint.body ? body.includes(endpoint.body) : body);
    }}
    )
    // t.end();
})
})

test.onFinish(() => process.exit(0));