
function diagonalDifference(arr) {
    let pivot 
    arr.length % 2 === 0 ? Math.floor(arr.length / 2) : pivot = null 
    let leftDiag = 0; 
    let rightDiag = 0;
    let firstIndex = 0;
    let lastIndex = arr.length - 1

    for(let i = 0; i <= arr.length - 1; i++){
        if(i === pivot){
            leftDiag += arr[i][pivot];
            rightDiag += arr[i][pivot];
            firstIndex++
            lastIndex--
        } else{
            leftDiag += arr[i][firstIndex]
            rightDiag += arr[i][lastIndex]
            firstIndex++
            lastIndex--
        }  
    }
    return Math.abs(leftDiag - rightDiag)
}  

let arr = [ [ 11, 2 ], [ 4, 5] ]
console.log(diagonalDifference(arr))

/* 
 11, 2
 4, 5

*/


