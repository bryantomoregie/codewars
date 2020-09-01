//https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

// Complete the rotLeft function below.
function rotLeft(a, d) {
        let i = 1
        
        while (i <= d){
            let firstNum = a.shift();
            a.push(firstNum)
            i++
        }
        
        return a
    }
    


let array = [1, 2, 3, 4, 5]
let rotate = 4

console.log(rotLeft(array, rotate))

/* 

.length of array 
minus one will give me the last index of this array 
if index - 5 is positive, move 


*/