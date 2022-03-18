const inputData = require('./day1-input.json');

function one() {
    let string = inputData.one;
    string = string.replace("()", "").replace(")(", "");
    const floorUP = string.split("(").length;
    const floorDOWN = string.split(")").length;

    console.log("UP: " + floorUP);    
    console.log("DOWN: " + floorDOWN);
    const floor = floorUP-floorDOWN;
    console.log("Result: " + floor)
}

function two() {
    const string = inputData.two;
    let floor = 0;
    for (let position = 0; position < string.length; position++) {
        const instruction = string.charAt(position);
        if (instruction === "(") {
            floor++;
        } else if (instruction === ")") {
            floor--;
        }
        if (floor < 0) {
            console.log("Floor: " + floor)
            console.log("Position: " + (position+1))
            break;
        }
    }
    
}



//one();
two();