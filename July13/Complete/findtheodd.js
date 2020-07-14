//https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

//find the integer that appears an odd number of times 

// function findOdd(A) {
//    //for loop
//    //if total is odd return number 
//     return 0;
//   }

  // function findOdd(A) {
  //   let obj = {};
  //   for (let val of A) {
  //       obj[val] = (obj[val] || 0) + 1;
  //   }
  //   for (let val in obj) {
  //       if (obj[val]%2 == 1) {
  //         return val
  //       }
  //   }
  // }
  console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))


  function findOdd(A) {
    let obj = {};
    A.forEach((val) => {
        obj[val] = (obj[val] || 0) + 1}
    )
    for (let val in obj) {
        if (obj[val]%2 == 1) {
          return val
        }
    }
  }