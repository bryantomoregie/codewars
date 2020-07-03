function friend(friends) {
    //look through array 
    //count the length of each element 
    //if element is more than 4 letters
    //remove from array 
}

function friend(friends) {
    var arr = []
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length == 4 && isNaN(friends[i])){
            arr.push(friends[i])
        }
   
    }
    return arr
}

//isNaN() evaluates to true if input is not a number 
//people look like they use .filter to filter out what doesnt evaluate to true in the array
//no loop
//O(n)