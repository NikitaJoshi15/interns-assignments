const fs = require('fs');
const readline = require('readline');

// Input and output file paths
const inputFilePath = 'input.txt'; // Change to your actual file path
const outputFilePath = 'output.txt';

// Create a readable stream
const rl = readline.createInterface({
    input: fs.createReadStream(inputFilePath),
    output: process.stdout,
    terminal: false
});

const outputLines = [];

rl.on('line', (line) => {
    try {
        let result = eval(line); // Evaluate the expression (Be cautious of eval in real-world applications)
        outputLines.push(${line} = ${result});
    } catch (error) {
        outputLines.push(${line} = Error);
    }
});

rl.on('close', () => {
    // Write the results to the output file
    fs.writeFileSync(outputFilePath, outputLines.join('\n'));
    console.log(Results written to ${outputFilePath});
});