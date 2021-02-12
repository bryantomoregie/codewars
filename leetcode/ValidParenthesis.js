//https://leetcode.com/problems/valid-parentheses/

var isValid = function(s) {
    
    if(s.length % 2 == 1) return false
    let arr = [];
    
    for(let char of s){
        if(char == '('){
            arr.push(')')
        }
        else if(char == '['){
            arr.push(']')
        }
        else if(char == '{'){
            arr.push('}')
        }
        else if(arr.length == 0 || arr.pop() != char){
              return false; 
        }        
    }
        return arr.length == 0 ? true : false
    }
