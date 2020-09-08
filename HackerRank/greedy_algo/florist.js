//https://www.hackerrank.com/challenges/greedy-florist/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms


function getMinimumCost(k, b) {
    let minTotalValue = 0;
    let c = b.sort((a, b) => b - a)
    
    for(let i = 0; i < c.length; i++){
        if(i <= k - 1){
            minTotalValue += c[i]
        }
        else if (i > k - 1){
            minTotalValue += (c[i] * 2)
        }
    }

    return minTotalValue
}

let k = 3
let c = [1, 3, 5, 7, 9]

console.log(getMinimumCost(k, c))

/*
So this works for small arrays, but we need it to work for massive data structures.
We need recursion, because recursion will tell us exactly what we need to know

we need to have some kind of recursion that states, for each multiple of 




*/