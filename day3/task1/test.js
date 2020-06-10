

function test(num){
    if(num == 0){
        return [];
    }
    else{
        return [num].concat(test(num-1));
    }
}

console.log(test(6));