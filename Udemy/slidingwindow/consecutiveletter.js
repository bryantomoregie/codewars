
function consecutiveLetters(string){
    let i = 0;
    let count = 1;
    for(let j = 1; j < string.length; j++){
        if(string[i] === string[j]){
            count++
        } else{
            i++
        }
    }

    return count
}

console.log(consecutiveLetters('hhhhello'))

function maxSubarraySum(array, num){
    let maxSum = 0;
    let tempSum = 0;
    for(let i = 0; i < array.length; i++){
        maxSum += array[i]
    }
    tempSum = maxSum;
    for(let i = num; i < array.length; i++){ // because we're taking this in chunks, we begin our loop at the beginning of the next chunk 
        tempSum  = tempSum + array[i] - array[i - num]
        maxSum = Math.max(tempSum, maxSum)
    }

    return maxSum
}

/*
The way we are doing this is we creating a temp sum and a max sum. We find the total of the sub array and set that to temp sum. 
We then compare that temp to the max we have and make whatever is larger the max. We do this until we have hit the end of the array. 
*/
