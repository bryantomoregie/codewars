function maxChar(str) {
    let arr = str.split('')
    let obj = {}

    arr.forEach(val => {
        obj[val] = (obj[val] || 0) + 1
    });

    let num = 0
    let ite = 0

    for (const item in obj) {
        if(obj[item] > num){
            num = obj[item]
            ite = item
        }
    }

    return ite
}

let str = "abc 123111111"
console.log(maxChar(str));