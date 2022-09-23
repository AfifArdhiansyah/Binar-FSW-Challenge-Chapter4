// console.log("Implement servermu disini yak 😝!");

const http = require("http");
const fs = require("fs");
const port = 8000;

http.createServer((req, res) => {
    switch(req.url) {
        case "/":
            req.url = "index.html";
            break;
        case "/searchcar":
            req.url = "searchcar.html";
            break;
    }
    let path = "public/" + req.url;
    fs.readFile(path, (err, data) => {
        res.writeHead(200);
        res.end(data);
    });
}).listen(port, 'localhost', () => {
    console.log(`Server is running on port ${port}, open http://localhost:${port} to view it`);
});