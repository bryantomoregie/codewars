//https://leetcode.com/problems/shuffle-the-array/

function shuffle(nums, n) {
    let i = 0;
    let j = n;
    let length = nums.length - 1;

    let newArray = []

    while(j <= length){
        newArray.push(nums[i]);
        newArray.push(nums[j]);
        i++
        j++
    }
    return newArray
};

let nums = [2,5,1,3,4,7]
let n = 3

console.log(shuffle(nums, n))

/* 

two pointers 
index 0 and index n - 1
move across the array, push into new array each  element until 
n -1 is equal to  nums.length - 1 

*/