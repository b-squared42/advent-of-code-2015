const fs = require("fs");

// Thanks to https://github.com/HallM
// Its basicly his solution

function one(input) {
  console.log(
    input.split("\n").reduce(function (total, string) {
      let realLength = string.length - 2;
      for (var i = 1; i < string.length; i++) {
        if (string[i] === "\\") {
          if (string[i + 1] === "x") {
            i += 3;
            realLength -= 3;
          } else {
            i++;
            realLength--;
          }
        }
      }

      return total + (string.length - realLength);
    }, 0)
  );
}

function two(input) {
  console.log(
    input.split("\n").reduce(function (total, string) {
      let expandLength = 2;
      for (var i = 0; i < string.length; i++) {
        if (string[i] === "\\" || string[i] === '"') {
          expandLength++;
        }
      }

      return total + expandLength;
    }, 0)
  );
}

fs.readFile("day8-input.txt", (err, data) => {
  if (err) throw err;
  one(data.toString());
  two(data.toString());
});
