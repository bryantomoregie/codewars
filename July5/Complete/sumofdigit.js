https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

function digital_root(n) {
    //to string
    //split
    //reduce
    //add up all digits 
    //if sum.length > 1, repeat (maybe this is the recursion. Calling function within itself)
    //if sumn.length === 1 
  }

  function digital_root(n) {
    let stringInteger = n.toString().split('').map(x => parseInt(x)).reduce((a, b) => a + b)
    if (stringInteger.toString().length === 1){
        return stringInteger
    } else { 
        return digital_root(stringInteger)
    }
  }

  console.log(digital_root(16))