/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let y = x
        if(x === 0) return 0;
        if(x < 0){
            x = x * -1
        }
        let arr = x.toString().split('')
        
        while(arr[arr.length - 1] == 0){
            arr.pop()
        }
    
        arr.reverse()
        let int = parseInt(arr.join(""))
        let signedInt = 2147483647
        
        if (int >= signedInt){
            return 0
        }
         
        if(y < 0){
            return int * -1
        } else {
            return int  
        }
    
    
    };