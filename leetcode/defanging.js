//https://leetcode.com/problems/defanging-an-ip-address/


var defangIPaddr = function(address) {
    
    for(let x of address){
        if(x === "."){
            string.concat("[.]")
        } else {
            string.concat(x)
        }
    }

};

let address = "1.1.1.1"

//"1[.]1[.]1[.]1"

console.log(defangIPaddr(address))

/*



*/
let string = ""
    
for(let x of address){
    if(x === "."){
        string += "[.]"
    } else {
        string += x
    }
}

return string 