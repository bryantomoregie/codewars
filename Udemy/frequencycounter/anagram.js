
function validAnagram (str1, str2){
    let obj1 = {};
    let obj2 = {};

    for(let letter of str1){
        obj1[letter] = ( obj1[letter]|| 0) + 1
    }

    for(let letter of str2){
        obj2[letter] = ( obj2[letter]|| 0) + 1
    }

    for(let key in obj1){
        if(obj2[key] && obj2[key] === obj1[key]){
            continue 
        } else {
            return false 
        }
    }
     return true 
}

console.log(validAnagram('anagram', 'margana'))