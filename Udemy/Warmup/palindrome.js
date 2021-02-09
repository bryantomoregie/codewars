function palindrome(str) {
    return str == str.split('').reverse().join('') ? true : false
}

let str = "aba"
console.log(palindrome(str))