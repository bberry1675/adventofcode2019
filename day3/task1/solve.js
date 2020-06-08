const readline = require('readline');
let rl = readline.Interface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let inputs = [];


rl.on('line', line => {
    inputs.push(line);
})

rl.on('close', () => {
    console.log('Finished reading the file');
    console.log(inputs);
})