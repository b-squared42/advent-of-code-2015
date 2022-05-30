const inputData = require("./day12-input.json");

function one() {
  const sumOfAllNumbers = searchInJson(inputData);
  console.log(sumOfAllNumbers);
}

function searchInJson(json) {
  let sumOfAllNumbers = 0;
  if (Array.isArray(json)) {
    for (let i = 0; i < json.length; i++) {
      const input = json[i];
      sumOfAllNumbers += searchInJson(input);
    }
  } else if (typeof json === "object") {
    const keys = Object.keys(json);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      sumOfAllNumbers += searchInJson(json[key]);
    }
  } else if (typeof json === "number") {
    sumOfAllNumbers += json;
  } else {
    // console.log(json);
  }

  return sumOfAllNumbers;
}

function two() {
  const sumOfAllNumbers = searchInJsonWithoutRed(inputData);
  console.log(sumOfAllNumbers);
}

function searchInJsonWithoutRed(json) {
  let sumOfAllNumbers = 0;
  if (Array.isArray(json)) {
    for (let i = 0; i < json.length; i++) {
      sumOfAllNumbers += searchInJsonWithoutRed(json[i]);
    }
  } else if (typeof json === "object") {
    const keys = Object.keys(json);
    const values = Object.values(json);
    if (keys.includes("red") || values.includes("red")) {
      return 0;
    }
    for (let i = 0; i < keys.length; i++) {
      sumOfAllNumbers += searchInJsonWithoutRed(json[keys[i]]);
    }
  } else if (typeof json === "number") {
    sumOfAllNumbers += json;
  } else {
    // console.log(json);
  }

  return sumOfAllNumbers;
}

// one();
two();
