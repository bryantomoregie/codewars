function fibonacci(n) {
    let arr = [0, 1]
    let total = fib(arr)
    for(let i = 0; i <= n-3; i++){

        arr.push(arr[arr.length - 1] + arr[arr.length -2] )
    }

    function fib(arr){
        if (arr.length === 0) return 0
        return arr[0] += fib(arr.slice(1))
    }

    function fib(arr){
        if(arr.length === 0) return 0
    
        return arr[0] += fib(arr.slice(1))
    }
    // for(let j = 0; j <= arr.length; j++){
    //     total += arr[j]
    // }
    
    fib(arr)
    return total
}

console.log(fibonacci(4))

/*
0
2
1, 2
1, 1, 2
[0, 1, 1, 2] arr[0] + fib(arr.slice(1))
*/