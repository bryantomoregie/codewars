//https://leetcode.com/problems/number-of-good-pairs/

var numIdenticalPairs = function(nums) {
    let count = 0;

    for(let i = 0; i<nums.length-1; i++){
        for(let j = 1; j< nums.length; j++){
            if(nums[i] == nums[j] && i < j){
                count++
            }
        }
    }

    return count
};

// let nums = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

console.log(numIdenticalPairs(nums))

/*
Given an array of integers nums.
A pair (i,j) is called good if nums[i] == nums[j] and i < j.

obj1 = {
    1: 3
    2: 1
    3: 2
}

*/

