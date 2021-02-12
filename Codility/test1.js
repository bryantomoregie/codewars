
/*
This is a demo task.

Write a function:

    function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

        N is an integer within the range [1..100,000];
        each element of array A is an integer within the range [−1,000,000..1,000,000].


Example test:   [1, 3, 6, 4, 1, 2]
WRONG ANSWER (got 2 expected 5)

Example test:   [1, 2, 3]
WRONG ANSWER (got 2 expected 4)

Example test:   [-1, -3]
WRONG ANSWER (got -2 expected 1)
*/

// function solution(A){
//     let obj = {};
//     A.forEach(val => {
//         obj[val] = (obj[val] || 0) + 1
//     });  
// }
function solution(A){
   let arr = A.sort((a, b) => a - b);
    let int = arr[0]
    let length = arr.length

    console.log(A, A[length - 1])
    if(arr[length - 1] < 0) {
        return 1 }
    
    for(i = 0; i < length; i++){
        if(int != arr[i]){
            return int
        }
        else if (int == arr[i] && int != arr[i + 1]){
            int++
        }
    }
    return int 
}

let A = [1, 3, 6, 4, 1, 2]
console.log(solution(A))


function solution(A) {
  for (i = 1; i <= 100000; i++) {
    if(!A.includes(i)) return i;
  }
  return 100001
}
