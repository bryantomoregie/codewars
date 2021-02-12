// function solution(A) {
//     if (A.length == 1) return A[0];
    
//     A.sort((a, b) => a -b)
//     num = A[0]
//     for(i = 0; i < A.length; i++){
//         console.log(A[i], num);
//         if(A[i] != num){
//             return num++
//         }
//         num++
//     }
// }

// console.log(solution([3,1]));

// function solution(A, X) {
   
//     let obj = {};

//     for(i = 1; i <= X; i++){
//         obj[i] = 1
//     } 

//     let counter = 0;
//     console.log(A.length);
//     for(i = 0; i < A.length; i++){
//         console.log("im hit");
//         let key = A[i].toString();
//         console.log(key, obj[key]);
//         if(obj[key] == 1){
//             counter++
//             obj[key] = 0;
//             if(counter == X){
//                 return i;
//             }
//         }
            
//     }
//     console.log(obj, counter);
//     return -1
// }

// console.log(solution([1], 1));

/*
2...100
100000000000 elemnts failed 
single element failed. Dumb reason#
two elements failed 
permutation but one element ioccurs twice
permutaion, and few elements occur twice
permutation, one element occurs three times
all values are the same
*/

function solution(A) {
    if(A.length == 1) return 0
    let obj = {}

    A.forEach((val) => {
        obj[val] = (obj[val] || 0) + 1
    })

    let arr = Object.keys(obj) 
    let counter = arr[0]
   

    for(let val of arr){
        if(val != counter){
            return 0
        }else{
            counter++
        }
    }

    return 1;
}

/*

*/