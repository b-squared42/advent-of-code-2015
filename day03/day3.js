const inputData = require("./day3-input.json");

function one() {
  const input = inputData.one;
  const map = new Map();
  let posX = 0;
  let posY = 0;
  let houseCounter = 0;

  if (!map.get(posX + "," + posY)) {
    map.set(posX + "," + posY, +1);
    houseCounter++;
  }
  for (let i = 0; i < input.length; i++) {
    switch (input.charAt(i)) {
      case "^":
        posY++;
        break;
      case ">":
        posX++;
        break;
      case "v":
        posY--;
        break;
      case "<":
        posX--;
        break;
    }
    if (!map.get(posX + "," + posY)) {
      map.set(posX + "," + posY, 1);
      houseCounter++;
    }
  }

  console.log(houseCounter);
}

function two() {
  const input = inputData.two;
  const map = new Map();
  let posXSanta = 0;
  let posYSanta = 0;
  let posXRobot = 0;
  let posYRobot = 0;
  let houseCounter = 0;

  if (!map.get(posXSanta + "," + posYSanta)) {
    map.set(posXSanta + "," + posYSanta, +1);
    houseCounter++;
  }

  for (let i = 0; i < input.length; i += +2) {
    switch (input.charAt(i)) {
      case "^":
        posYSanta++;
        break;
      case ">":
        posXSanta++;
        break;
      case "v":
        posYSanta--;
        break;
      case "<":
        posXSanta--;
        break;
    }
    switch (input.charAt(i + 1)) {
      case "^":
        posYRobot++;
        break;
      case ">":
        posXRobot++;
        break;
      case "v":
        posYRobot--;
        break;
      case "<":
        posXRobot--;
        break;
    }
    if (!map.get(posXSanta + "," + posYSanta)) {
      map.set(posXSanta + "," + posYSanta, 1);
      houseCounter++;
    }
    if (!map.get(posXRobot + "," + posYRobot)) {
      map.set(posXRobot + "," + posYRobot, 1);
      houseCounter++;
    }
  }

  console.log(houseCounter);
}

//one();
two();
