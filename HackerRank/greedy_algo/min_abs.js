//https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms
function minimumAbsoluteDifference(arr) {

    let minAbs = Infinity;
   
     for(let i = 0; i < arr.length; i++){
         for(let j = i+1; j <= arr.length; j++){
             let max = Math.max(arr[j], arr[i]); 
             let min = Math.min(arr[j], arr[i]); 
             if ((max - min) < minAbs){
               minAbs = max - min
             }
         }
     }
 
     return minAbs
 }
 

let arr = [3, -7, 0];

console.log(minimumAbsoluteDifference(arr));

/* 

do a for loop 
if number less than 0 turn to positive 
if that positive number is greater than max, change max
if that positive number is less than min, change min



*/
