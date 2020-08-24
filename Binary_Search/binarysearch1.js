function binarySearch(arr, int){
    let start = 0
    let end = arr.length - 1
    let middle = Math.floor((start + end) / 2)  
    console.log(start, end, middle)
    
    while(arr[middle] !== int && start <= end) {
        if (int < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if (arr[middle] === int){
        return middle
    } else {
        return -1
    }
}

// function binarySearch(arr, elem) {
//     var start = 0;
//     var end = arr.length - 1;
//     var middle = Math.floor((start + end) / 2);
//     while(arr[middle] !== elem && start <= end) {
//         if(elem < arr[middle]){
//             end = middle - 1;
//         } else {
//             start = middle + 1;
//         }
//         middle = Math.floor((start + end) / 2);
//     }
//     if(arr[middle] === elem){
//         return middle;
//     }
//     return -1;
// }

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 25, 46, 89], 20))