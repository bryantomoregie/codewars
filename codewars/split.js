//https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

function solution(str){
   let arr = [];

   for(let i = 0; i < str.length; i++){
       let string = ""
       
       if(i % 2 == 0 && i == str.length - 1){
        string += (str[i]);
        string += "_"
       }
       else if (i % 2 == 1){
        string += str[i];
        arr.push(string);
        string = "";
       }else {
        string += (str[i]);
       }
   }

   return arr
}

console.log(solution('abc')) // should return ['ab', 'c_']
console.log(solution('abcdef')) // should return ['ab', 'cd', 'ef']

/*
    Could do a for loop
    Every even number we start a string, 
    every odd number we add to that string and push that string into the array 

    if number is even and the last element push that number and the _ into the array
*/