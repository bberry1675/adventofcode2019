const readline = require('readline');
let rl = readline.Interface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let fuel_needed = 0;

function calculate_fuel(input){
    let mass = parseInt(input);
    
    //let mass = parseInt(input);
    let calculation = Math.floor(mass / 3) - 2;
    if(calculation <= 0){
        return;
    }
    else{
        fuel_needed += calculation;
        calculate_fuel(calculation);
    }
}

rl.on('line', (line) => {
    calculate_fuel(line.trim());
});

rl.on('close', () => {
    console.log(`Fuel needed: ${fuel_needed.toLocaleString('decimal')}`);
});