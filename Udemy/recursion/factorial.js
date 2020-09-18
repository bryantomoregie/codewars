

function factorial(num){
    if(num === 1) return 1
    return num *= factorial(num - 1)
} 


let x = 7
console.log(factorial(x))

/*
7 * 6 * 5 * 4 * 3 * 2 * 1
*/