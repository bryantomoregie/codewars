//https://app.codility.com/c/run/trainingQFVAC2-J9T/ 2/12/2021

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    if (A.length == 0) return 0
 
    let obj = {};
 
    for(let int of A){
        obj[int] = (obj[int] || 0) + 1
    } 
 
     let count = 0;
    for(let key in obj){
        count++
    }
 
    return count;
 }