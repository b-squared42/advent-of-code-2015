const inputData = require("./day7-input.json");

function one() {
  const input = inputData.one;
  const sentences = input.split("|");
  const map = new Map();
  map.set("1", 1);
  const value = valueOfKey("a", map, sentences, "");
  console.log("Value of a:", value);
}
function two() {
  const input = inputData.one;
  const sentences = input.split("|");
  const map = new Map();
  map.set("1", 1);
  let value = valueOfKey("a", map, sentences, "");
  console.log("Value of a:", value);
  console.log("clearing map..");
  map.clear();
  console.log("wrinting values into map..");
  map.set("1", 1);
  map.set("b", value);
  value = valueOfKey("a", map, sentences, "");
  console.log("Value of new a:", value);
}

function valueOfKey(key, map, sentences, spacer) {
  if (map.has(key)) {
    return map.get(key);
  }
  for (const sentence of sentences) {
    const parts = sentence.split(" -> ");
    if (parts[1] == key) {
      if (!Number.isInteger(parts[0]) && parts[0].length < 3 && parts[0] != 0) {
        let value = valueOfKey(parts[0], map, sentences, spacer);
        map.set(key, value);
        return value;
      } else if (parts[0].includes("OR")) {
        const operants = parts[0].split(" OR ");
        let value1 = valueOfKey(operants[0], map, sentences, spacer);
        let value2 = valueOfKey(operants[1], map, sentences, spacer);
        let value = value1 | value2;
        map.set(key, value);
        return value;
      } else if (parts[0].includes("LSHIFT")) {
        const operants = parts[0].split(" LSHIFT ");
        let value = valueOfKey(operants[0], map, sentences, spacer);
        value = value << operants[1];
        map.set(key, value);
        return value;
      } else if (parts[0].includes("RSHIFT")) {
        const operants = parts[0].split(" RSHIFT ");
        let value = valueOfKey(operants[0], map, sentences, spacer);
        value = value >> operants[1];
        map.set(key, value);
        return value;
      } else if (parts[0].includes("AND")) {
        const operants = parts[0].split(" AND ");
        let value1 = valueOfKey(operants[0], map, sentences, spacer);
        let value2 = valueOfKey(operants[1], map, sentences, spacer);
        let value = value1 & value2;
        map.set(key, value);
        return value;
      } else if (parts[0].includes("NOT")) {
        const operant = parts[0].split("NOT ");
        let value = valueOfKey(operant[1], map, sentences, spacer);
        value = ~value;
        map.set(key, value);
        return value;
      } else {
        let value = parts[0];
        map.set(key, value);
        return value;
      }
    }
  }
  return "ERROR - Key not found: " + key;
}

// one();
two();
