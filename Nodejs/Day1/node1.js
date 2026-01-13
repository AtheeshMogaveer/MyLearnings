const fs = require("fs");
const os = require("os");
fs.writeFileSync("no.txt", "Hello This is Batman! From Gotham City");
console.log(os.platform());
