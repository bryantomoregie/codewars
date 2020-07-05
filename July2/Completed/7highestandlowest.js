//https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

// // function highAndLow(numbers) {
  //split atring into array of numbers
  //if number is higher than previous number, return number 
  //if number is lower than previous number, return number
  //if number in a string 
// }

// function highAndLow(numbers){
//   var highest = -Infinity
//   var lowest = Infinity
//   var arr = numbers.split(' ')
//   for(let i = 0; i < arr.length; i++) {
//     if (arr[i] > highest) {
//      var highest = arr[i] 
//     } else {
//       highest
//     }
//   }
//   return highest
// }

const numbers = "1 2 -3 4 5"
// function highAndLow(numbers) {
//   let arr = numbers.split(' ')
//   arr.sort((a, b) => a - b)
//   let highest = arr[0]
//   let lowest = arr[arr.length -1]
//   return lowest + ' ' + highest 
// }

const highAndLow = numbers => {
  const arr = numbers.split(' ').sort((a, b) => a - b),
    lowest = arr[0],
    highest = arr[arr.length -1];
  return `${lowest} ${highest}`;
}

console.log(highAndLow(numbers))

