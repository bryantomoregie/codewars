//https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

function findOutlier(integers){
    //.filter on array for odd and for even numbers
    //return ternary expression if array.length = 1 ? array[0] : array2[0]

  }

  function findOutlier(integers){
    let evenArray = integers.filter(integer => {
        return integer % 2 == 0 
    })
    let oddArray = integers.filter(integer => {
        return integer % 2 == 1 || integer % 2 == -1
    })
    return evenArray.length === 1 ? evenArray[0] : oddArray[0]
  }

console.log(findOutlier([1, -2, 3]))
// console.log(findOutlier([1, 2, 3]), 2)
// console.log(findOutlier([2,6,8,10,3]), 3)
// console.log(findOutlier([0,0,3,0,0]), 3)
// console.log(findOutlier([1,1,0,1,1]), 0)