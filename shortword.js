function findShort(s){
    //if string.length is less than previous number, replace 
}

function findShort(s){
    const arr = s.split(' ')
    var newarr = []
    for(let i = 0; i < arr.length; i++){
     newarr.push(arr[i].length)
    }
    
   return Math.min(...newarr)
  }

  var string = "bitcoin take over the world maybe who knows perhaps"
  console.log(findShort(string))

  //Math.min(...x) returng the number
  //Math.min(x) returns NaN because function expects disting variables 
  //I've seen .filter to take stuff out of the array. 
  //Ive seen .map to do something to each element in an array
  