//https://app.codility.com/c/run/trainingJ8YWH8-2NC/

function solution(A) {
    A.sort((a, b) => a-b)

   let max1 = A[A.length - 1] * A[A.length - 2] * A[A.length - 3]
   let max2 = A[A.length - 1] * A[0] * A[1]

   return Math.max(max1, max2)
}