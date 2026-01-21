let http = require("http");
let input = process.argv;
console.log(input);
http
  .createServer((req, res) => {
    console.log(req.method);
    if (req.url == "/") res.write("<h1>Bankai</h1>");
    if (req.url == "/favicon.ico") res.write("<h1>Yokosu</h1>");
    res.end("Hello");
  })
  .listen(4550);
