
let arr = []

function checkLastElement(brace){
    if (brace === ')' && arr[arr.length - 1] === '('){
        arr.pop()
        return true 
    }
    if (brace === '}' && arr[arr.length - 1] === '{'){
        arr.pop()
        return true 
    }
    if (brace === ']' && arr[arr.length - 1] === '['){
        arr.pop()
        return true 
    } else {
        return false
    }
}


function braces(values){

for(let string of values){
    for(let brace of string){
        if(brace === '(' || brace === '{' || brace === '['){
            arr.push(brace)
        } 
        else if (checkLastElement(brace)){
            continue
        } else {
            return 'NO'
        }
    }
}
    return 'YES'
}


let array = [
    '[{()}]',
    '[{}]'
]
console.log(braces(array))

/*
iterate thru
.push into new array
if closing brace, check to see if last element in new array is the opener 
if yes, pop
if no, return NO
if the whole string has been traversed, return YES

*/
