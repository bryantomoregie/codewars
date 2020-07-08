function validAnagram(str1, str2) {
    let arr1 = str1.split('')
    let arr2 = str2.split('')
    let object1 = {}
    let object2 = {}
    for (let val of arr1) {
        object1[val] = (object1[val] || 0) + 1
    }
    for (let val of arr2) {
        object2[val] = (object2[val] || 0) + 1
    }
    for (let key in object1) {
        if(!(key ** 2 in object2)){
            console.log(key)
            return false 
        }
        if(object2[key ** 2] !== object1[key]){
            console.log(key)
            return false
        }
        return true 
    }


console.log(object1, object2)
}
x = 'anagram'
y = 'margana'
console.log(validAnagram(x, y))

