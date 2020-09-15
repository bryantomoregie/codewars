
function findMatch(array){
    let left = 0;
    let right = array.length - 1 ;
    let counter = 0;

    while(left < right){
        if(array[left] + array[right] === 0){
            counter++
            if (array[right - 1] === array[right]){
                right--
            } 
            else if(array[left + 1] === array[left]){
                left++
            } else  {
                left++
                right--
            } 
        } 
        else if (array[left] + array[right] < 0){
            left++
        } else (
            right--
        )
    }

    return counter
}

let array = [-10, -5, -4, -3, -3, -2, 0, 1, 2, 3, 4, 5, 5, 6, 7] //=> 6

console.log(findMatch(array))