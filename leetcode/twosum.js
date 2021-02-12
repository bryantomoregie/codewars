var twoSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    console.log(nums);
    let point1 = 0;
    let point2 = nums.length - 1;
    let total = point1 + point2;
    let test = 0;

    while(test < 10){
        if((nums[point1] + nums[point2]) == target){
            return new Array(point1, point2)
        }
        if(total < target){
            point2--
        }
        if((nums[point1] + nums[point2]) > target){
            point1++
        }
    }
    
    return new Array(point1, point2)
};

console.log(twoSum([2, 7, 11, 15], 9))