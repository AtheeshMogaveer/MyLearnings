let http = require("http");
const queryString = require("querystring");
http
  .createServer((req, res) => {
    if (req.url == "/") {
      res.writeHead(200, { "content-type": "text/html" });
      res.end(`<form method='post' action="/submit">
        <input name="name" type="text" placeholder="Enter name"/>
        <input name="password" type="password" placeholder="Enter password"/>
        <input type="submit" placeholder="Submit"/>
        </form>
        `);
    } else if (req.url == "/submit") {
      let dataChunks = [];
      res.writeHead(200, { "content-type": "text/html" });
      res.write("Form submitted");
      req.on("data", (chunk) => {
        dataChunks.push(chunk);
      });
      req.on("end", () => {
        let rawOne = Buffer.concat(dataChunks).toString();
        let readableOne = queryString.parse(rawOne);
        console.log(rawOne);
        console.log(readableOne);
        res.end(`<h1>${readableOne.name} </h1>
            <h1>${readableOne.password} </h1>
            `);
      });
    }
  })
  .listen(4444);
