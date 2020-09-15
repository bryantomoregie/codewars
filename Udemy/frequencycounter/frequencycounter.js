//https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410598#content

function sameFrequency(int1, int2) {
    // find out if the two numbers have the same frequency of digits x
    //convert to string x
    //check to see if length is the same. If not, return false  x
    // create empty objects x
    //add each number and its frequency to the object x
    //for each element in the string add to the object x
    //compare the two objects, somehow
}

function sameFrequency(int1, int2) {
    let str1 = int1.toString()
    let str2 = int2.toString()

    if (str1.length !== str2.length) return false;

    let obj1 = {}
    let obj2 = {}

    for (let val of str1) {

        obj1[val] = (obj1[val] || 0) + 1
    }
    for (let val of str2) {
        obj2[val] = (obj2[val] || 0) + 1;
    }

    

    for (let key in obj1) {
        if (!(key in obj2)) {
            return false;
        }
        else if (obj2[key] !== obj1[key]) {
            return false;
        } else {
            return true;
        }
    }

  
}

console.log(sameFrequency(1864, 4391))

//how would I add strign elements to an object