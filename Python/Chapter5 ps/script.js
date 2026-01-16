let fs = require("fs");
for (let i = 1; i <= 9; i++)
  fs.writeFileSync(`problem${i}.py`, "print('hello world')");
