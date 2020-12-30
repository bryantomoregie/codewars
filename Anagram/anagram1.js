function validAnagram(str1, str2) {

   let object1 = hashMap(str1)
   let object2 = hashMap(str2)

    for (let key in object1)
    if (!(key in object2)) {
        return false
    }
    else if (object2[key] !== object1[key]) {
        return false
    } 
    return true 
}

function hashMap(string){
    let object1 = {};
    for(let val of string ){
        object1[val] = (object1[val] || 0) + 1
    }
    return object1;
}


console.log(validAnagram("thiss", "shit"))