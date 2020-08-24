
function max(levels){
    let high = -Infinity 
    let index = 0
    let low = Infinity 
    
    for(let i = 0; i <= levels.length; i++){
        if(levels[i] > high ){
            high = levels[i]
            index = i
        }
    }

    if(high === levels[0]){
        return -1
    }

    for(let j = 0; j < index; j++){
        if (levels[j] < low && levels[j] < high ){
            low = levels[j]
        }
    }

    return high - low

}

let levels = [20, 3, 6, 7, 4]

console.log(max(levels))