

function binarySearch(array, number){
    let min = 0;
    let max = array.length - 1;
    let mid = 0;

    for(let num of array){
        mid = Math.floor((min + max) / 2)
        if(array[mid] === number){
            return true 
        }
        else if (array[mid] < number){
            min = mid + 1
        } else {
            max = mid - 1
        }
    }

    return false 
}


console.log(binarySearch([1, 2, 3, 4, 6, 7, 8, 9, 10], 9))