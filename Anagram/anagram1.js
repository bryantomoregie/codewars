function validAnagram(str1, str2) {
    let object1 = {}
    let object2 = {}

    for(let val of str1 ){
        object1[val] = (object1[val] || 0) + 1
    }

    for(let val of str2){
        object2[val] = (object1[val] || 0) + 1
    }

    for (let key in object1)
    if (!(key in object2)) {
        return false
    }
    else if (object2[key] !== object1[key]) {
        return false
    } 
    return true 
}



console.log(validAnagram("this", "shit"))