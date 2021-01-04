//https://www.hackerrank.com/challenges/mini-max-sum/problem 1/4/2021

function miniMaxSum(arr) {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    arr.sort();

    let min = arr.slice(0, 4).reduce(reducer);
    let max = arr.slice(1, 5).reduce(reducer);

    return `${min} ${max}`
    
    }


    arr = [7, 69, 2, 221, 8974]
    console.log(miniMaxSum(arr))

/*
I need to organize the numbers high to low
So it wants a string. 

Organize the numbers
Add a slice
Add another slice
return interpolation
*/