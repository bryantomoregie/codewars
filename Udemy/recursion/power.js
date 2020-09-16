

function power(x, y){
    if (y === 0){
        return 1
    } 
    return x *= power(x, y-1) //return 2 * the results of 2 * the results of 2 * the reults of 2 * 1
}
let x = 2;
let y = 4;

console.log(power(x, y))

/* 
Needs a base case!
Needs the recursive call with different data!


2 * 2 * 2 * 2

 2 * power(2, 3)
 2 * power(2, 2)
 2 * power(2, 1)
 when y = 0 return 1


*/