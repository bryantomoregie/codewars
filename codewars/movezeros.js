//https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript


var moveZeros = function (arr) {
    let zeroArr = []
    for(let i = 0; i <= arr.length; i++){
        if (arr[i] === 0){
            arr.splice(i, 1)
            zeroArr.push(0)
        }
    }

    return arr.concat(zeroArr)
  }

console.log(moveZeros([9,0,9,1,2,1,1,3,1,9,0,0,9,0,0,0,0,0,0,0]))


// false,1,1,2,1,3,"a",0,0,0

/* 
.slice to remove the zeros
add the zero to the array
amd append zeros at the end 

.slice does not change the original array 
.splice does change the original array 
so I'll use .splice(index of the zero, and 1 to say I only want to remove that one item)

*/

