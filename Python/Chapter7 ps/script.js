let fs = require("fs");
for (let i = 1; i <= 10; i++) {
  fs.writeFileSync(`problem${i}.py`, "");
}
