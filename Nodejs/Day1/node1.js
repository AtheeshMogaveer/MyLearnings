const fs = require("fs");
const os = require("os");
fs.writeFileSync("no.txt", "Hello This is Batman!");
console.log(os.platform());
console.log(os.cpus());
