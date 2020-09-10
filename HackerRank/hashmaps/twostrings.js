//https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

function twoStrings(s1, s2) {
    let str1 = s1.split('');
    let str2 = s2.split('');

    let obj1 = {}
    let obj2 = {}

    for(let letter of str1){
        obj1[letter] += (obj1[letter]|| 0) + 1
    }

    for(let letter of str1){
        obj2[letter] += (obj2[letter]|| 0) + 1
    }

    for(let key in obj1){
        if(obj2[key]){
            return "YES"
        }
    }

    return "NO"

}

let str1 = "byo"
let str2 = "world"

console.log(twoStrings(str1, str2))