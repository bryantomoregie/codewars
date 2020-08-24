function averagePair(arr, int) {
    let front = 0 
    let back = arr.length - 1
    
    while (front < back) {
        if((arr[front]+arr[back]) / 2 === int) {
            return true 
        }
        else if ((arr[front]+arr[back]) / 2 < int) {
            front++
            
        }
        else {
            back--
        }
    }
    return false 
}

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))