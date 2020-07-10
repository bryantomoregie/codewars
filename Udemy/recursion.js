//https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344120#content

function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num - 1);
}

//3 factorial or 3! is 3 * 2 * 1
// call function recursively 

//common errors
//no base case 
