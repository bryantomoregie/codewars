//https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

var kidsWithCandies = function(candies, extraCandies) {
    var max = candies.reduce(function(a, b) {
        return Math.max(a, b);
    });

    //var max = Math.max.apply(null,candies);

    let array = []

    for (let number of candies){
        if ((number + extraCandies) >= max ){
            array.push(true)
        } else {
            array.push(false)
        }
    }

    return array
};

let candy = [2,3,5,1,3]
let extra = 3

console.log(kidsWithCandies(candy, extra))


/* 
create empty array 
for loop 
if 

*/