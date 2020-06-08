const readline = require('readline');
let rl = readline.Interface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let split;

function run_program(position){
    
    switch(split[position]){
        case 1: 
        split[split[position + 3]] = split[split[position + 1]] + split[split[position + 2]];
        run_program(position + 4);    
        break;
        case 2: 
        split[split[position + 3]] = split[split[position + 1]] * split[split[position + 2]];
        run_program(position + 4);   
        break;
        case 99: 
        return;
        default: console.log('Something went wrong with the Opt Code'); break;
    }
}

rl.on('line', (line) => {
    split = line.trim().split(',').map(value => parseInt(value.trim()));
    split[1] = 12;
    split[2] = 2;
    run_program(0);
    console.log(`Final output is: ${split[0]}`);
})

rl.on('close', () => {
    console.log('finished reading file');
})