let http = require("http");
let fs = require("fs");
http
  .createServer((req, res) => {
    // console.log(req.url);
    if (req.url == "/home") {
      fs.readFile("html/home.html", "utf-8", (err, data) => {
        // console.log(data);
        if (err) {
          res.write("This is an error");
          res.end();
          return;
        } else {
          res.setHeader("Content-Type", "text/html");
          res.write(data);
          res.end();
        }
      });
    }
    if (req.url == "/contact") {
      fs.readFile("html/contact.html", "utf-8", (err, data) => {
        console.log(data);
        if (err) {
          res.write("This is an error");
          res.end();
          return;
        } else {
          res.writeHead(200, { "content-type": "text/html" });

          res.write(data);
          res.end();
        }
      });
    }
  })
  .listen(4500);
