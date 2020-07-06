//https://www.codewars.com/kata/55f2b110f61eb01779000053

function getSum( a,b )
{
   //find the range of numbers between a and b 
   //add them all up
}
// function getSum( a,b ) {
//     var total = a
//   for(let i = a; i <= b; i++){
//     total += 1
//   }
// }
function getSum( a,b ) {
  // const higher = Math.max(a,b);
  // const lower  = Math.min(a, b);
  const [lower, higher] = [a, b].sort((a, b) => a - b);

  if (higher === lower) return a;
  let total = lower;
  for (let i = lower + 1; i <= higher; i++) total += i;
  return total;
}


console.log(getSum(5, 3)) // 3 + 4 + 5 // 12

//to find the range you start at lower and add the index to each iteration 
//total is being increased with each iteration