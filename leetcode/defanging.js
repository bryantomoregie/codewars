//https://leetcode.com/problems/defanging-an-ip-address/


var defangIPaddr = function(address) {
    let string = ""
    
    for(let x of address){
        if(x === "."){
            string += "[.]"
        } else {
            string += x
        }
    }

    return string 
};

let address = "1.1.1.1"

//"1[.]1[.]1[.]1"

console.log(defangIPaddr(address))

/*

concat didnt work in for loop for some reason

*/