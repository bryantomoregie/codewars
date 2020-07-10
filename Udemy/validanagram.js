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
        if (!(key in object2)) {
            return false
        }
        else if (object2[key] !== object1[key]) {
            return false
        } else {
            return true
        }
    }
}

console.log(object1, object2)
}
x = 'anagram'
y = 'margana'
console.log(validAnagram(x, y))

