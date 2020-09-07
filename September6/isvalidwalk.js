//https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

function isValidWalk(walk) {
    // if (walk.length  !== 10) return false
    let obj = {};
    let value = null

    for(let i = 0; i <= walk.length - 1; i++){
        obj[walk[i]] = (obj[walk[i]] || 0) + 1;
    }

    // for(let val in obj){
    //     if (obj[val] !== 5){
    //         return false
    //     } else {
    //         continue
    //     }
    // }

   

    if (obj.n == undefined) return true  

    // for(let val in obj){
    //     if (obj[val] !== value ){
    //         return false 
    //     } else {
    //         return true
    //     }
    // }
  

  
  }


console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])) //true;
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])) //false;

//check to see if all the values are equal 