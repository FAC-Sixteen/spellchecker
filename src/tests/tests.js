const test = require("tape");
const router = require("../scripts/router");

const endpoints = [
    { url: "/unknown", status_code: 404},
    { url: "/", status_code: 200, body: 'view = "expelliarmus!"'},
    { url: "/public/normalise.css", status_code: 200},
    { url: "/public/style.css", status_code: 200},
    { url: "/public/script.js", status_code: 200},
    { url: "/spells", status_code: 200, body: '"spell": "Expelliarmus"'}
];

endpoints.forEach(endpoint => {
    test(`GET ${endpoint.url} should return status code ${endpoint.status_code}`, (t) => {
        t.plan(2);
    router(
        { url: endpoint.url},
        { writeHead: (status, _content) => {
            t.equal(status, endpoint.status_code);
        },
    end: body => {
        t.ok(endpoint.body ? body.includes(endpoint.body) : body);
    }}
    )
})
})

test.onFinish(() => process.exit(0));