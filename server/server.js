const express = require("express");
const http = require("http");
const app = express();
const port = 8082;
const server = http.createServer(app);

const object = {
    "username": "felix.schultz",
    "Name": "Felix Schultz"
};

app.get("/api", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    let data = JSON.stringify(object);
    res.send(data);
});

server.listen(port, () => console.log(`Listen on port: ${port}`))