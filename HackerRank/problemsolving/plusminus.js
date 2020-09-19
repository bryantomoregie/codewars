



function plusMinus(arr) {
let denom = arr.length

let positive =  0;
let negative = 0;
let zero  = 0;

for(let num of arr){
    if(num === 0){
        zero++
    }
    else if(num > 0){
        positive++
    } else {
        negative++
    }
}


return new Array(parseFloat((positive/denom).toFixed(6)), parseFloat((negative/denom).toFixed(6)), parseFloat((zero/denom).toFixed(6)))

}


console.log(plusMinus([-4, 3, -9, 0, 4, 1]))

