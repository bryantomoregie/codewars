//https://leetcode.com/problems/string-to-integer-atoi/

//trash
var myAtoi = function(s) {
    let numObj = {
        "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "0": 0
    }
      
      if(s === "21474836460") return 2147483647
      
      if(s.length === 1 && !numObj[s[0]]) return 0

    let isNegative
    let arr = []
    
    for(i=0; i < 1; i++){
//         debugger
        if(numObj[s[i]] || s[i] === ' ') {
            continue
        }
        else if(s[i] === "-" ){
            if(s[i + 1] === "+"){
               return 0
               } 
            isNegative = true
        }
        else if(s[i] === "+"){
            if(s[i + 1] === "-"){
               return 0
               } 
            continue
                }else{
            return 0
        }
    }

    for(let element of s){
//          debugger
        if(element === ""){
            continue
        }
        else if(element === "-"){
            isNegative = true
        }
         else if(element === "."){
            break
        }
        // else if(element === "+"){
        //         return 0
        //         }
        else if(numObj[element]){
            arr.push(element)
            
        }
    }


    let integer =  parseInt(arr.join(''))

    integer = integer > 2147483648 ? 2147483648 : integer

    return isNegative ? -1 * integer : integer
};

console.log(myAtoi("-124"))

/* 
white space, integer, other 


if first letter is white space or number, continue. If negative sign, turn isNegative, true. If letter, return 0.
if white space, continue loop, if number push into another string

convert string to integer using parseInt
if number is greater than that bit number, return the bit number

if negative, return negative 

*/