const inputData = require("./day5-input.json");

function one() {
  const input = inputData.one;
  const words = input.split(",");
  let niceWords = 0;
  words.forEach((word) => {
    if (
      !word.includes("ab") &&
      !word.includes("cd") &&
      !word.includes("pq") &&
      !word.includes("xy")
    ) {
      let vowels = 0;
      let doubleLetter = false;
      for (let i = 0; i < word.length; i++) {
        if (word.charAt(i) === word.charAt(i - 1)) {
          doubleLetter = true;
        }
        if (
          ["a", "e", "i", "o", "u"].findIndex(
            (v, n, o) => v == word.charAt(i)
          ) != -1
        ) {
          vowels++;
        }
      }
      if (vowels >= 3 && doubleLetter) {
        niceWords++;
      }
    }
  });
  console.log(niceWords);
}

function two() {
  const input = inputData.two;
  const words = input.split(",");
  let niceWords = 0;
  //let word = words[0];
  words.forEach((word) => {
    let pair = false;
    let triple = false;
    for (let i = 0; i < word.length; i++) {
      var tempPair = word.charAt(i) + word.charAt(i + 1);
      if (!pair && tempPair.length == 2 && word.split(tempPair).length >= 3) {
        pair = true;
      }
      if (
        !triple &&
        word.charAt(i) == word.charAt(i + 2) &&
        word.charAt(i) != word.charAt(i + 1)
      ) {
        triple = true;
      }
    }
    if (pair && triple) {
      niceWords++;
    }
  });
  console.log(niceWords);
}

//one();
two();
