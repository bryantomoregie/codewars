

function oddNumbers(x, y) {
    let arr = [x];
    
    for(let i = x+1; i < y; i++) {
        if(i%2 === 1) {
            arr.push(i);
        }
    }

    arr.push(y)
    return arr
}

console.log(oddNumbers(2, 10))