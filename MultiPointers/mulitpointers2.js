function areThereDuplicates(a, b , c) {
    let object = {}
    
  for (const element in arguments) {
      object[arguments[element]] = (object[arguments[element]] || 0) + 1
  }
  for (var key in object)
      if (object[key] > 1){ 
          return true
      }
      return false
  }
  
  //call whatever is passed in as arguments, arguments
  //create a JS object
  //turn each argument into a key value pair in the object
  
  //if more than one, return true

  function areThereDuplicates(...args) {
    // Two pointers
    let args1 = args.sort();
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args1[start] === args1[next]){
          return true
      }
      start++
      next++
    }
    console.log(args1)
    return false
  }
  console.log(areThereDuplicates(1, 2, 3))