



function productOfArray(arr) {
    if(arr.length === 1) return arr[0]

    return arr[0] *= productOfArray(arr.slice(1))
}

console.log(productOfArray([1,2,3,10])) // => 60

/* 

 [1] * [2, 3, 10]
        [2] * [3 * 10]
            [3] * [10]
                array[0]

 
 Appears like we are arr.slice(1) to change the array
 return array[0] *= product(arr.slice(1)]
*/