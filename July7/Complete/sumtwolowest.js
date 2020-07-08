//https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript

function sumTwoSmallestNumbers(numbers) { 
   return numbers.sort((a, b) => {return a-b}).splice(0, 1)[0] + numbers.sort((a, b) => {return a-b}).splice(0, 1)[0]

  }