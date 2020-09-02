//https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

function minimumSwaps(arr) {
    let sortedArray = arr.slice().sort();
  let count = 0;

  for (let i = 0; i <= arr.length - 1; i++) {
      let lowerNumber = Infinity;
    for (let j = i + 1; j <= arr.length - 1; j++) {

      if (arr[j] < arr[i] && arr[j] < lowerNumber) {
        lowerNumber = arr[j];
      }
    }

    if (lowerNumber != Infinity){
        let index = arr.findIndex(num => num === lowerNumber);
        arr[index] = arr[i];
        arr[i] = lowerNumber;
        count++;
    }

    if (arr.toString() == sortedArray.toString()) return count;
  }
  return count 
  }

/*
if we swap high to low this would b e
4312
1342
1243
1234

for loop 
i = 0 
if arr[]

Look at the first integer
loop through remainder of the array and see if remainder is less than first integer 

look for lowest number
Keep a variable and change it if a number is less than that number 

Swap those two numbers 

go onto the next number in the array 


1 3 5 2 4 6 7
1 2 5 3 4 6 7
1 2 3 5 4 6 7
1 2 3 4 5 6 7



*/

let arr = [4, 3, 1, 2];

console.log(minimumSwaps(arr));

//3
