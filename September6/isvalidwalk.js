//https://www.codewars.com/kata/54da539698b8a2ad76000228/train/javascript

function isValidWalk(walk) {
    if (walk.length  !== 10) return false
    let obj = {};

    for(let i = 0; i <= walk.length - 1; i++){
        obj[walk[i]] = (obj[walk[i]] || 0) + 1;
    }

    if ((Object.keys(obj).length === 2) && (obj.n === obj.s)) return true;
    if ((Object.keys(obj).length === 4) && (obj.e === obj.w)) return true; 

    return false 
  
  }


console.log(isValidWalk(['n','s','n','s','e','w','e','w','e','e'])) //true;


//check to see if all the values are equal 