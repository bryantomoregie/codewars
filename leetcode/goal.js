//https://leetcode.com/problems/goal-parser-interpretation/

var interpret = function(command) {
    let string = "";

    for(let i = 0; i < command.length; i++){
        
        if(command[i] == "G"){
            string += "G"; 
        }

        if(command[i] == "(" && command[i + 1] == ")"){
            string += "o";
            i++;
        }

        if(command[i] == "(" && command[i + 1] == "a"){
            string += "al";
            i = i+3;
        }
    }

    return string;
};

let command = "G()(al)"


console.log(interpret(command))

/*
I think its time for sliding window!
I'll begin at index one and check what it is. 
I'll do a for loop with a second pointer 
If G concat G to string. 
If ( check next element. If ) then add O and add one to the parenthesis and the code 
If a add AL and 3 to both
*/