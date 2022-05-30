const inputData = require("./day9-input.json");

function one(smallestRoute) {
  const input = inputData.one;
  const sentences = input.split("|");
  const cities = [];
  const objs = [];
  sentences.forEach((sentence) => {
    const citiesAndDist = sentence.split(" = ");
    const dist = citiesAndDist[1];
    const city1 = citiesAndDist[0].split(" to ")[0];
    const city2 = citiesAndDist[0].split(" to ")[1];

    if (!cities.includes(city1)) cities.push(city1);
    if (!cities.includes(city2)) cities.push(city2);

    objs.push({ c1: city1, c2: city2, dist: dist });
  });

  let results = [];
  for (const city of cities) {
    let citiesCopy = structuredClone(cities);
    citiesCopy = citiesCopy.filter((e) => e !== city);
    results.push(createTree(citiesCopy, objs, city, smallestRoute));
  }

  console.log(
    results.sort((a, b) => {
      return smallestRoute ? a - b : b - a;
    })
  );
  console.log("------------------");
  console.log(results[0]);
}

function createTree(cities, objs, location, shortest) {
  if (cities.length == 0) {
    return 0;
  }
  let savedDistance = shortest ? Number.MAX_VALUE : Number.MIN_VALUE;

  for (const city of cities) {
    let calcedDist = calcDist(objs, location, city);
    let citiesCopy = structuredClone(cities);
    citiesCopy = citiesCopy.filter((e) => e !== city);
    calcedDist =
      parseInt(calcedDist) +
      parseInt(createTree(citiesCopy, objs, city, shortest));
    if (shortest) {
      if (calcedDist < savedDistance) {
        savedDistance = calcedDist;
      }
    } else {
      if (calcedDist > savedDistance) {
        savedDistance = calcedDist;
      }
    }
  }

  return savedDistance;
}

function calcDist(objs, c1, c2) {
  for (const obj of objs) {
    if (c1 == obj.c1 && c2 == obj.c2) {
      return obj.dist;
    }
    if (c2 == obj.c1 && c1 == obj.c2) {
      return obj.dist;
    }
  }
  console.log("ERROR: Some values are ill. ", JSON.stringify(objs), c1, c2);
  return Number.MAX_VALUE;
}

one(true);
one(false);
