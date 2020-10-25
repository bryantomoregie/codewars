//https://leetcode.com/problems/palindrome-number/

var isPalindrome = function(x) {
    let numString = x.toString();
    let length = numString.length;
    let midway = Math.min(length / 2)
    let pointer = length - 1;

    if(length % 2 !== 0){
        for(let i = 0; i < midway; i++){
            if(numString[pointer] === numString[i]){
                pointer--
            }else{
                return false
            }
        }
        return true 
    }

    if(length % 2 === 0){
        for(let i = 0; i <= midway; i++){
            if(numString[pointer] === numString[i]){
                pointer--
            }else{
                return false
            }
        }
        return true 
    }
};

console.log(isPalindrome(1221))

/*
Determine if a number is a palindrome 
I think I will first take that number and turn it into a string
I could do multiple pointers
if length is odd, if first and last are the same then move the pointer closer and closer 
if loop completes, return true, if not false 
needs to loop until the midway mark

could do the same thing 
*/