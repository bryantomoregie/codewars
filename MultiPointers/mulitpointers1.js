//Takes in array and returns how many unique values


function countUniqueValues(arr){
    if (arr.length === 0) return 0;
    
    let pointer1 = 0;
    let pointer2 = 1;
    
    while (pointer2 <= arr.length - 1) {
    if (arr[pointer1] === arr[pointer2]) {
        pointer2++
    } else if (arr[pointer1] !== arr[pointer2]) {
        pointer1++
        arr[pointer1] = arr[pointer2]
        pointer2++
    }
    }
    return pointer1 + 1
    }

    //The way he did it, he set only one variable and did a for loop, setting hte second variable in there. Incrememnting that second variable and 
    //incrementing that first variable as it met a condition. 