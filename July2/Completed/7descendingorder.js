function descendingOrder(n){
    //n + '', turn integer into string 
    //.split
    //.desc
    //.join
    //
  }

  function descendingOrder(n){
  return parseInt((n + '').split('').sort((a, b) => b - a).join(''))
  }

  var n = 21445

  console.log(descendingOrder(n))

  //did it in one line for the first time !
  //.sort() will sort an array in alphabetical order or ascending order
 // if you want descending you need to do .sort((a, b) => b - a)
 