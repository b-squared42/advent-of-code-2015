const inputData = require('./day10-input.json');

function one(iterations) {
    let input = inputData.one;

    for (let i = 0; i < iterations; i++) {
        let newInput = "";
        for (let charIndex = 0; charIndex < input.length;) {
            const char = input.charAt(charIndex);
            let charCount = 1;
            while (true) {
                if (charIndex + charCount > input.length) break;
                if (input.charAt(charIndex + charCount) === char) charCount++;
                else break;
            }

            newInput += String(charCount) + String(char);

            charIndex += charCount;
        }
        console.log(input, "=>", newInput);
        input = newInput;
    }
    console.log("------");
    console.log(input.length);
}

function two() {
    
}

one(40);
one(50);