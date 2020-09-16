//https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410594#overview


function findLongestSubstring(string){
    let start = 0;
    let length = 1;
    let obj = {};
    if (string.length === 0) return 0
    obj[string[start]] = 1
    for(let i = 1; i <  string.length; i++){
        if(!obj[string[i]]){
            length = Math.max(length, i - start)
            obj[string[i]] = 1
        }
        else if(obj[string[i]]){
            start++;
            i = start
            obj = {}
            obj[string[start]] = 1
        }
    }
    return length === 1 ? 1 : length + 1
}


let string = 'rithmschool' // => 7
console.log(findLongestSubstring(string))

/*





*/