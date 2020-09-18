


function compareTriplets(a, b) {
let arra = a;
let arrb = b;

let aTotal = 0;
let bTotal = 0;

for(let i = 0; i < a.length; i++){
    if(a[i] === b[i]){
        continue
    } 
    else if(a[i] > b[i]){
        aTotal++
    } else {
        bTotal++
    }
}

return new Array(aTotal, bTotal)

}

console.log(compareTriplets([5, 6, 7],
    [3, 6, 10]))