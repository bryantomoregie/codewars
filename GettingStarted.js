//to run javascript in the terminal node FileName

//making an object from array
let obj = {};
    A.forEach((val) => {
        obj[val] = (obj[val] || 0) + 1}
    )

    //O(n) sort somehow
    var firstMissingPositive = function(nums) {
        var swap = function(i, j) {
            var tmp = nums[i];
            nums[i] = nums[j];
            nums[j] = tmp;
        };
    
        for (let i = 0; i < nums.length; i++) {
            while (0 < nums[i] && nums[i] - 1 < nums.length
                    && nums[i] != i + 1
                    && nums[i] != nums[nums[i] - 1]) {
                swap(i, nums[i] - 1);
            }
        }
    
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] != i + 1) {
                return i + 1;
            }
        }
        return nums.length + 1;
    };

    //Get the first key value pair from object

    //using c# to create an array, put stuff in there, and check it
    //using System;
// you can also use other imports, for example:
// using System.Collections.Generic;

// you can write to stdout for debugging purposes, e.g.
// Console.WriteLine("this is a debug message");
/*
class Solution {
    public int solution(int[] values) {
         var seen = new int[values.Length];

    foreach (var value in values)
    {
        if (value < 1 || value > values.Length)
        {
            // Out of range: not a permutation
            return 0;
        }
        if (seen[value - 1] == 1)
        {
            // Duplicated value: not a permutation
            return 0;
        }
        else
        {
            // Value is OK. Mark as seen.
            seen[value - 1] = 1;
        }
    }

    // All values in range, no duplicates: a valid permutation
    return 1;
    }
}
*/

for(let key in object1){
    if(!object2[key]){ //if this does not exist return false 
        return false 
    }
    if(obj1[key]!== obj2[key]) //checking if the frequency is the same 
    {
        return flase 
    }
}

