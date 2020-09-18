

function fibonacci(num){
    if (num <= 2) return 1;

    return fibonacci(num - 1) + fibonacci(num - 2)
}

console.log(fibonacci(10)) // 55

/*

Accepts a number and returns the nth number in the sequence
fibonacci sequence is 
1, 1, 2, 3, 5, 8, 13, 21, 34, 55

n being the index
f(n) = n-1 + n-2

function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}
*/
