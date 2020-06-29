function solution(number) {
    const list3or5 = mult3or5(number)
    const sum = sumarray(list3or5)
    return sum
}

function mult3or5(number) {
    let output = []
    for (let i = 1; i < number; i++) {
        if (i % 5 === 0 || i % 3 === 0) {
            output.push(i)
        }

    }
    return output
}

function sumarray(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}

// The For Loop
// The for loop has the following syntax:

// for (statement 1; statement 2; statement 3) {
//   // code block to be executed
// }
// Statement 1 is executed (one time) before the execution of the code block.

// Statement 2 defines the condition for executing the code block.

// Statement 3 is executed (every time) after the code block has been executed.
