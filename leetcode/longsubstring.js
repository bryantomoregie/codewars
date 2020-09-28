//https://leetcode.com/problems/longest-substring-without-repeating-characters/
var lengthOfLongestSubstring = function(s) {
    let subArray = new Object;
    let counter = 0;
    let firstElement = 0;
    let tempCounter = 0
  
    for(let i = 0; i < s.length; i++){
      if(!subArray[s[i]]){
          subArray[s[i]] = 1
          tempCounter += 1
      }else {
          subArray = {};
          firstElement += 1;
          i = firstElement - 1;
          counter = Math.max(counter, tempCounter);
          tempCounter = 0;
      }
    }
    return Math.max(counter, tempCounter);
  
  };

let s = "abcabcbb" // => 3

console.log(lengthOfLongestSubstring(s))



/*
find the longest substring of repeated cables 

create an object 
if the item is not in object, put in object
increment count

if the 
*/