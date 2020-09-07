//https://www.hackerrank.com/challenges/luck-balance/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms

function luckBalance(k, contests) {
  let total = 0;
  let newArr = [];

  for (let i = 0; i < contests.length; i++) {
    if (contests[i][1] === 0) {
      total += contests[i][0];
    } else if (contests[i][1] === 1) {
      newArr.push(contests[i][0]);
    }
  }

  let arr = newArr.sort((a, b) => b - a);

  for (let i = 0; i < arr.length; i++) {
    if (i <= k - 1) {
      total += newArr[i];
    } else if (i > k - 1) {
      total -= newArr[i];
    }
  }
  return total;
}

console.log(
  luckBalance(5, [
    [13, 1],
    [10, 1],
    [9, 1],
    [8, 1],
    [13, 1],
    [12, 1],
    [18, 1],
    [13, 1],
  ])
);

/*
for loop
if (arr[1] === 0)
total += arr[0]

if(arr[1] === 1){
newArr.push[arr[0]
}

newArr(filter)

split the array into two arrays, by the k-1 integer 

add all of those integers together in both arrays 

add first array to total 
subtract second array from total 

return total



5 [ [ 13, 1 ],
  [ 10, 1 ],
  [ 9, 1 ],
  [ 8, 1 ],
  [ 13, 1 ],
  [ 12, 1 ],
  [ 18, 1 ],
  [ 13, 1 ] ]

  42


*/
