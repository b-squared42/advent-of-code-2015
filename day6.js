const inputData = require('./day6-input.json');

function one() {
    const input = inputData.one;
    const sentences = input.split("|");

    let field = Array.from(Array(1000), () => Array(1000).fill(false));
    sentences.forEach(sentence => {
        if (sentence.startsWith("turn on")) {
            sentence = sentence.slice("turn on ".length);
            const mesurements = sentence.split(" through ");
            const from = mesurements[0].split(",");
            const to = mesurements[1].split(",");
            for (let x = from[0]; x <= to[0]; x++) {
                for (let y = from[1]; y <= to[1]; y++) {
                    field[x][y] = true;
                }
            }
        } else if (sentence.startsWith("turn off")) {
            sentence = sentence.slice("turn off ".length);
            const mesurements = sentence.split(" through ");
            const from = mesurements[0].split(",");
            const to = mesurements[1].split(",");
            for (let x = from[0]; x <= to[0]; x++) {
                for (let y = from[1]; y <= to[1]; y++) {
                    field[x][y] = false;
                }
            }
        } else if (sentence.startsWith("toggle")) {
            sentence = sentence.slice("toggle ".length);
            const mesurements = sentence.split(" through ");
            const from = mesurements[0].split(",");
            const to = mesurements[1].split(",");
            for (let x = from[0]; x <= to[0]; x++) {
                for (let y = from[1]; y <= to[1]; y++) {
                    field[x][y] = !field[x][y];
                }
            }
        } else {
            console.log("ERROR");
        }
    })
    let litLights = 0;
    for (let x = 0; x < field.length; x++) {
        for (let y = 0; y < field[0].length; y++) {
            if (field[x][y]) {
                litLights++;
            }
        }
    }
    console.log(litLights);
}

function two() {
    
}

one();
two();