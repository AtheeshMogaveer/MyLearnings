let fs = require("fs");
for (let i = 1; i <= 7; i++) {
  fs.writeFileSync(`problem${i}.py`, "print('helloworld')");
}
