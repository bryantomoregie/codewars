/*
capitalize the first letter of each word in the string 
*/


function capitalize(string){
    let arr = string.split(' ');
    let newArr = []
    for(let element of arr){
        let capitalized = element[0].toUpperCase() + element.slice(1)
        newArr.push(capitalized)
    }

    return newArr.join(' ')
}


let string = "Bryant is killing it today!"
console.log(capitalize(string))

