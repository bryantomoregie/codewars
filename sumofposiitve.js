function positiveSum(arr) {
    //take in array 
    //sort through array finding each element thats positive 
    //adding up each of those numbers
    //return total
}

function positiveSum(arr) {
    let total = 0

    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > 0) {
            total += arr[i]
        }
    }
    return total
}

arr = [1, -2, 3, 4, 5]

console.log(positiveSum(arr))