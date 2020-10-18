/*Decode Numbers
Programming challenge description:
You are given an encoded message containing only numbers. You are also provided with the following mapping:

A : 1
B : 2
C : 3
...
Z : 26


Given an encoded message, count the number of ways it can be decoded.
Input:
Your program should read lines from standard input. Each line contains an encoded message of numbers. You may assume that the test cases contain only numbers.
Output:
Print out the different number of ways it can be decoded. Note: 12 could be decoded as AB(1 2) or L(12). Hence the number of ways to decode 12 is 2.
Test 1
Test Input
12
Expected Output
2
Test 2
Test Input
123
Expected Output
3
*/
//uodated
function decode(integer) {
    let stringNum = integer.toString();
    let firstDigit = 0;
  
    let counter = 1;
    
    for(let i = 1; i < stringNum.length; i++){
        if (stringNum[firstDigit] + stringNum[i] < 27){
            counter++
        }
        firstDigit++
    }
    return counter
}

let x = 12;
let y = 1239658547342634; // => 3

console.log(decode(y))

/* 
counter starts at 1;
count by twos, if any are less than 26 increment counter
sliding window!
*/