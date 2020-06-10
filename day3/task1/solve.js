const readline = require('readline');
let rl = readline.Interface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let inputs = [];

class Line{
    constructor(x1,y1,x2,y2){
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }

    static intersect(l1,l2){
        //check that the lines are not both horizontal or vertical
        if(!( ( (l1.x1 == l1.x2) && (l2.x1 == l2.x2) ) || ( (l1.y1 == l1.y2) && (l2.y1 == l2.y2) ) )){

            

            return false;
        }
        else{
            return false;
        }
    }
}


rl.on('line', line => {
    inputs.push(line);
})

rl.on('close', () => {
    console.log('Finished reading the file');
    
    let path1 = inputs[0].trim().split(',');
    let path2 = inputs[1].trim().split(',');

    function createLines(px,py, path){
        if(path.length == 0){
            //return empty array so nothing is appended to line list
            return [];
        }
        else{
            let direction = path.shift();
            let nx;
            let ny;
            let size = parseInt(direction.slice(1));

            switch(direction.charAt(0)){
                case 'L': nx = px - size; ny = py; break;
                case 'R': nx = px + size; ny = py; break;
                case 'U': ny = py + size; nx = px; break;
                case 'D': ny = py - size; nx = px; break;
                default: console.log('Error with checking the direction'); process.exit(1);
            }

            let new_line = new Line(px,py, nx, ny);

            return [new_line].concat(createLines(nx,ny,path))
            
        }
    }

    function findIntersections(list1, list2){
        let intersections = []
        list1.forEach(l1 => {
            list2.forEach(l2 => {

            });
        });

        return intersections;
    }


    console.log(createLines(0,0,path1));

    let line_list1= createLines(path1);
    let line_list2 = createLines(path2);



})