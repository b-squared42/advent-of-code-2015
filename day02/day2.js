const inputData = require("./day2-input.json");

class Box {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
    this.wall1 = length * width;
    this.wall2 = width * height;
    this.wall3 = height * length;
  }
  smallestWall() {
    return Math.min(this.wall1, this.wall2, this.wall3);
  }
  sortedSides() {
    return [this.length, this.width, this.height].sort((a, b) => {
      return a - b;
    });
  }
}

function one() {
  const input = inputData.one;
  const boxSizes = input.split(",");
  let boxes = new Array();
  boxSizes.forEach((size) => {
    const dimensions = size.split("x");
    boxes.push(new Box(dimensions[0], dimensions[1], dimensions[2]));
  });
  let wrappingPaper = 0;
  boxes.forEach((box) => {
    wrappingPaper +=
      2 * box.length * box.width +
      2 * box.width * box.height +
      2 * box.height * box.length +
      box.smallestWall();
  });
  console.log(wrappingPaper);
}

function two() {
  const input = inputData.two;
  const boxSizes = input.split(",");
  let boxes = new Array();
  boxSizes.forEach((size) => {
    const dimensions = size.split("x");
    boxes.push(new Box(dimensions[0], dimensions[1], dimensions[2]));
  });
  let ribbon = 0;
  boxes.forEach((box) => {
    const sortedSides = box.sortedSides();
    ribbon += sortedSides[0] * 2 + sortedSides[1] * 2;
    ribbon += box.length * box.width * box.height;
  });

  console.log(ribbon);
}

//one();
two();
