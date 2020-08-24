//codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript


function persistence(num, counter = 1) {
    let str = num.toString();
    if (str.length === 1) return 0
    let total = 1

    for (let digit of str) {
        total *= digit
    }

    if (total.toString().length === 1) {
        return counter
    } else {
        console.log(counter, num, total)
        num = total
        return persistence(num, counter + 1)
    }
}

console.log(persistence(444))

 //Im thinking some kind of recursion
 //multiply each number by each other
 // if number is not single digits, do it again
 //each recursion, increment a counter
 //wnen single digits, return counter 