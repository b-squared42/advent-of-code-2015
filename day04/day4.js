const inputData = require("./day4-input.json");
const md5 = require("js-md5");

function one() {
  const input = inputData.one;
  let md5Try;
  let output = "1";
  let hash = 1;
  while (!output.startsWith("00000")) {
    md5Try = input + hash++;
    output = md5(md5Try);
  }
  console.log(md5Try);
}

function two() {
  const input = inputData.two;
  let md5Try;
  let output = "1";
  let hash = 1;
  while (!output.startsWith("000000")) {
    md5Try = input + hash++;
    output = md5(md5Try);
  }
  console.log(md5Try);
}

//one();
two();
