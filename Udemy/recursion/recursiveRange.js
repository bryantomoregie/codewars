


function recursiveRange(number){

    if (number === 0) return 0

    return number + recursiveRange(number - 1)

}

console.log(recursiveRange(10)) // 55

/*

Adds up all numbers from 0 to number passed to it

*/