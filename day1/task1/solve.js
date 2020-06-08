const readline = require('readline');
let rl = readline.Interface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let fuel_needed = 0;

rl.on('line', (line ) => {
    
    let mass = parseInt(line.trim());
    fuel_needed += Math.floor((mass / 3)) - 2
});

rl.on('close', () => {
    console.log('finished reading the file');
    console.log(`Fuel needed is ${fuel_needed}`)
})