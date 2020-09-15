
function countUniqeValue(...numbers){

    let obj = {};
    let count = 0;
    
    for(let number of numbers){
        obj[number] = (obj[number] || 0) + 1
    }

    for(let key in obj){
        count++
    }

    return count

}

function countUniqeValuess(arr){
    let count = 0;

    for(let i = 1; i <= arr.length - 1; i++){
        if(arr[i] === arr[i -1]){
            count++
        } else {
            continue
        }
    }
    return count 
}

function countUniqeValues(arr){
    let i = 0;

    for(let j = 1; j <= arr.length - 1; j++){
        if(arr[i] !== arr[j]){
            i++
            arr[i] = arr[j]
        } 
    }
    return i + 1
}

console.log(countUniqeValues([1,1,1,2]))
                            