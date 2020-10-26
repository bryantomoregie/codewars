//https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

function removeChar(str){
    let arr = str.split('')
    let newArr = [];
    for(let i = 1; i < arr.length - 1; i++){
      newArr.push(arr[i])
    }
     
     return newArr.join('')
   
   };