const inputData = require("./day11-input.json");

function one(input) {
  let isSecurePass = false;
  while (!isSecurePass) {
    input = incrementPass(input);
    isSecurePass =
      notExistInvalidLetters(input) &&
      existIncrementingChars(input) &&
      existDoubleLetters(input);
  }
  console.log(input);
  return input;
}

function existIncrementingChars(input) {
  for (let i = 0; i < input.length - 2; i++) {
    const firstChar = input.charCodeAt(i);
    const secondChar = input.charCodeAt(i + 1);
    const thirdChar = input.charCodeAt(i + 2);

    if (firstChar + 1 == secondChar && firstChar + 2 == thirdChar) {
      return true;
    }
  }
  return false;
}
function notExistInvalidLetters(input) {
  return !input.includes("i") && !input.includes("o") && !input.includes("l");
}
function existDoubleLetters(input) {
  let foundDoubleLetters = 0;
  let doubleLetters = [];
  for (let i = 0; i < input.length - 1; i++) {
    const firstChar = input.charCodeAt(i);
    const secondChar = input.charCodeAt(i + 1);

    if (firstChar == secondChar && !doubleLetters.includes(firstChar)) {
      foundDoubleLetters++;
      doubleLetters.push(firstChar);
    }
  }
  return foundDoubleLetters > 1;
}

function incrementPass(input) {
  for (let i = input.length - 1; i >= 0; i--) {
    let char = input.charCodeAt(i) + 1;
    const stop = char <= 122;
    if (!stop) {
      char -= 26;
    }
    const first = input.substring(0, i);
    const second = String.fromCharCode(char);
    const third = input.substring(i + 1);
    input = first + second + third;
    if (stop) {
      break;
    }
  }
  return input;
}

one(one(inputData.one));
