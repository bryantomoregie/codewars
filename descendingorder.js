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