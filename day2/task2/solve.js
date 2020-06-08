const readline = require('readline');
let rl = readline.Interface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});


let initial;
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
    //make an array of the input string
    initial = line.trim().split(',').map(value => parseInt(value.trim()));
    
    //set up the loop
    let range = Array(100).fill().map((_,inx) => inx);

    range.forEach(noun => {
        range.forEach(verb => {
            split = initial.map(value => value);
            split[1] = noun;
            split[2] = verb;

            run_program(0);

            if(split[0] == 19690720){
                console.log(`Answer is: ${100 * noun + verb}`);
            }
            else{
                //console.log(`Wrong Inputs: ${noun} ${verb}`);
            }

        })
    })

    //console.log(range);


    //console.log(`Final output is: ${split[0]}`);
});


rl.on('close', () => {
    console.log('finished reading the file');
})