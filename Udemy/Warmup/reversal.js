function reverse(str) {
    let st = "";

    for(i = str.length - 1; i >= 0; i--){
        st += str[i]
    }
    return st
}

console.log(reverse("bryant"))
/*
abcde 
Take the last element in the string and add it to a new string
*/