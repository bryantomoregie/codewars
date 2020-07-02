function squareDigits(num) {
    // convert each integer to a string
    //split that string
    //convert string to integer
    //square integer
    //convert integer to string
    //put all strings together
    //make into into integer
}

function squareDigits(num) {
    let str = (num + '').split('')
    let arr = []
    for (let i = 0; i < str.length; i++) {
        arr.push((Math.pow(str[i], 2)) )
    }
 return parseInt(arr.join(""))
}



console.group(squareDigits(100))


  //What I learned. 
  //I don't know how to use forEach loops 
  //using return breaks the loop 
  //