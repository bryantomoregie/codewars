var majorityElement = function(nums) {
    let obj = {};
    let max = -Infinity;
    let val = -Infinity;
    
    for(let num of nums){
        obj[num] = (obj[num] || 0) + 1
    }
    
 
    
    for(let key in obj){
        
        if(obj[key] > val){
           val = obj[key];
            max = parseInt(key);
        }
    }
    
    return max;
    
};

console.log(
    majorityElement([3,2,3])
)

