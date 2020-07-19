function averagePair(arr, int) {
    let left = 0
    let right = arr.length - 1
    while(left < right){
        let sum = (arr[left] + arr[right]) / 2;
        if(sum === int){
            return true
        } else if(sum > int){
            right--
        } else if(sum < int){
            left++
        }
    }
    return false
}


// function averagePair() {
    //array is sorted 
    //multiple points patterns
    //could add 3 + 1 first. That give us 4
    //2.5 is less than 4 so move the first integer up one.
    // 3+ 2 = 2.5 divide. If 2.5 return true 
// }

console.log(averagePair([1, 2, 3], 2.5))