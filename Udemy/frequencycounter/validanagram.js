function createFrequencyCountObject(str){
    // return [...str].reduce((a, b) => ({...a, [b]: (a[b] || 0) + 1}), {});
    let obj = {};
    for (let val of str) {
        obj[val] = (obj[val] || 0) + 1;
    }
    return obj;
}

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false; //guarding statement

    let object1 = createFrequencyCountObject(str1);
    let object2 = createFrequencyCountObject(str2);

    // console.log(object1, object2);

    for (let key in object1) {
        if (!(key in object2)) {
            return false
        }
        else if (object2[key] !== object1[key]) {
            return false
        } 
    }
    return true
}

console.log( validAnagram('anagrag', 'marganz') === false )

console.log(validAnagram('abbccdd', 'babcdcd') === true) //should be true
console.log(validAnagram('aaaaab', 'bbbbba') === false) // should be false
console.log(validAnagram('anagram', 'gramana') === true)
console.log(validAnagram('head', 'hide') === false)

//guard statement
//create helper method, abstraction
//when using a for loop, consider if theres an already made array method that can accomplish that task
//functions signature is the number and type of the inputs and the type of the output

//hwk: look up forEach, map, filter, reduce methods on array
//hwk: continue working on portfolio