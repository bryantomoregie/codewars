
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


function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < nums.length) {
        // if current window doesn't add up to the given sum then 
            // move the window to right
        if(total < sum && end < nums.length){
          total += nums[end];
                end++;
        }
        // if current window adds up to at least the sum given then
            // we can shrink the window 
        else if(total >= sum){
          minLen = Math.min(minLen, end-start);
                total -= nums[start];
                start++;
        } 
        // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
        else {
          break;
        }
      }
     
      return minLen === Infinity ? 0 : minLen;
}

let arr = [2, 3, 1, 2, 4, 3]
let int = 7

console.log(minSubArrayLen(arr, int))

/* 
We're keeping track of total, which is the total of all these numbers.
We're keeping track of the first index of this subarray, the last index of this subarray,
and the length of this subarray. 
While start i s less than length, meaning we're going all the way through this array. 
If total amount added up so far is not equal to sum and end index has not reached the end, 
add nums[end] to total and increment end
We're doing this until we are equal to or greater then sum
If we are >= sum minLen is end - start 
and we'll subtract the front of the sub array until we are less than 7 and we do it again.
Once the loop is complete we send minlen

*/