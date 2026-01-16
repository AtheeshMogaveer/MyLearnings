let http = require("http");
http
  .createServer((req, res) => {
    res.end("Hi Bro thandani thano");
  })
  .listen(4500);
http
  .createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.end("<b>Hi Bro thandani thano</b>");
  })
  .listen(4800);
console.log("Helloo");
