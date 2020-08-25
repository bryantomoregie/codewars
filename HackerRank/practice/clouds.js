

function jumpingOnClouds(arr) {
let pointer = 0;
let count = 0;
let last = arr.length - 1

while(pointer < last){
    if (arr[pointer + 2] === 0){
        pointer += 2
        count += 1
    } 
    else if (arr[pointer + 1] === 0){
        pointer += 1
        count += 1
    } 
}
return count
}



console.log(jumpingOnClouds(
    [0, 0, 1, 0, 0, 1, 0]
    ))

    /*
    start at [0]
    count = 0 
    while pointer <= array.last
    if arr[0 + 2] === 0 
    pointer += 2
    count += 1
    if arr[0 + 1] === 0  
    pointer += 1 
    count += 1
    
    */