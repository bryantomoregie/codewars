



function maxSubarraySum(arr, int){
    let maxSum = 0;
    let tempSum = 0;
    
    if (arr.length < int) return null
    
    for (let i = 0; i < int; i++) {
        maxSum += arr[i];
    }
    
    tempSum = maxSum
    
    for (let i = int; i < arr.length; i++) {
        tempSum = tempSum - arr[i - int] + arr[i];
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum
}