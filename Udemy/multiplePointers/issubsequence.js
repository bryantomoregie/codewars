
function isSubsequence(string1, string2) {
    let i = 0;
    for(let j = 0; j < string2.length; j++){
        if (i === string1.length - 1) return true;    
        else if(string1[i] === string2[j]){
            i++;
        }
    }
    return false 
}

/*
let i = o 
for each letter in this string compare
if a match increment i and j
if not, increment j alone and decrease i to 0

if i === string.length - 1 return true 

if we go thru the whole second string return false 
*/

console.log(isSubsequence('sing', 'sting'))