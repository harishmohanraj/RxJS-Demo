console.clear();

let source = [1,"a","b","c",2,"f",50,200,"d","e"];


let result = source
                .map(x => parseInt(x))
                .filter(x => !isNaN(x))
                .reduce((a,b) => a+b, 0)

console.log(result)