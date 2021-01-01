//https://www.hackerrank.com/challenges/staircase/problem 1/1/2020

function staircase(n) {
    let arr = [];
    let num = n - 1;
    
    for(let i = 0; i < n ; i++){
        for(let j = 0; j < n; j++){
            if(j >= num){
                arr.push('#')
            }else{
                arr.push(' ')
            }
        }
        console.log(arr.join(''));
        arr = [];
        num--;
    }

}

console.log(staircase(4))

/*
What is the goal here?
I could build an array of all the elements then use .join and console.log that. But that seems like a lot. Let's try it though
*/