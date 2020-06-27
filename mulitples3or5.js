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

