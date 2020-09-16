


function minSubArrayLen(arr, int) {

    let j = 0
    let beginningOfArray = 0;
    let endOfArray = 0;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === int){
            beginningOfArray = i 
        } else {
            
        }
    }
}

let arr = [2, 3, 1, 2, 4, 3]
let int = 7

console.log(minSubArrayLen(arr, int))

/*
I'm being asked to return the minimum length of a sub array inside the array that is being passed as an argument that is greater than or equal to
One element is an array 
So if a single number is greater than the int then return one

If no number is greater than or equal to nor is there a a conbination of numbers that are greater than or equal to, return 0

start at arr[0] and check if 2 is => 7 
check if arr[1] is greater than or equal to 7
If it is not, see if arr[0] and arr[1] is greater than or equal to 7
If not, check the next index. 
See if the previous two numbers are greater than or equal to 7
If not, see if the previous numbers combined are greater than or equal to 7
If equal to 7, subtract the first number. 
Once Youve gotten to the end of the array, count how many numbers are in your sliding window. 


*/

