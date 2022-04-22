const inputData = require('./day6-input.json');

function one() {
    const input = inputData.one;
    const sentences = input.split("|");

    let field = [];
    for (let i = 0; i < 1000; i++) {
        let arr = [];
        for (let j = 0; j < 1000; j++) {
            arr.push(false);
        }
        field.push(arr);
    }

    for (let i = 0; i < sentences.length; i++) {
        const parts = sentences[i].split(/,| /);
        if (parts[0] === "turn") {
            for (let x = parseInt(parts[2]); x <= parseInt(parts[5]); x++) {
                for (let y = parseInt(parts[3]); y <= parseInt(parts[6]); y++) {
                    field[x][y] = (parts[1] === "on");
                }   
            }
        } else {
            for (let x = parseInt(parts[1]); x <= parseInt(parts[4]); x++) {
                for (let y = parseInt(parts[2]); y <= parseInt(parts[5]); y++) {
                    field[x][y] = !field[x][y];
                }   
            }
        }
    }
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
    const input = inputData.one;
    const sentences = input.split("|");

    let field = [];
    for (let i = 0; i < 1000; i++) {
        let arr = [];
        for (let j = 0; j < 1000; j++) {
            arr.push(0);
        }
        field.push(arr);
    }

    for (let i = 0; i < sentences.length; i++) {
        const parts = sentences[i].split(/,| /);
        if (parts[0] === "turn") {
            for (let x = parseInt(parts[2]); x <= parseInt(parts[5]); x++) {
                for (let y = parseInt(parts[3]); y <= parseInt(parts[6]); y++) {
                    if (parts[1] === "on") {
                        field[x][y] += 1;
                    } else {
                        field[x][y] -= 1;
                        if (field[x][y] < 0) {
                            field[x][y] = 0;
                        }
                    }
                }   
            }
        } else {
            for (let x = parseInt(parts[1]); x <= parseInt(parts[4]); x++) {
                for (let y = parseInt(parts[2]); y <= parseInt(parts[5]); y++) {
                    field[x][y] += 2
                }   
            }
        }
    }
    let brightness = 0;
    for (let x = 0; x < field.length; x++) {
        for (let y = 0; y < field[0].length; y++) {
            brightness += field[x][y];  
        }
    }
    console.log(brightness);
}

//one();
two();