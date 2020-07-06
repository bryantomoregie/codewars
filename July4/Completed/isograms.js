function isIsogram(str) {
    //create an object
    //trun string to an array
    //for each loop if theres not that key, add it
    //if there is, return false
    //when done return true 
}

function isIsogram(str) {
    var isogram = {}
    var array = str.split('')
    for (let i = 0; i < array.length; i++) {
        const currentLetter = array[i].toLowerCase();
        if (isogram[currentLetter] === 1) {
            return false 
        }  else {
            isogram[currentLetter] = 1
        }
    }
    return true
}


console.log(isIsogram("caty"))


//passed by value boolean, integer, string  primitives
//passed by reference array, object non-primitives

//var, let, const 
//var is a functional scope, let and const are block scope
//none make variable global scope
