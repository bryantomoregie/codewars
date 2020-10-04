
function lengthOfPalindrome(string, left, right){
    while(left >= 0 && right < string.length && string[left] === string[right]){
        left--;
        right++;
    }
    return (right - left) - 1 
}

var longestPalindrome = function(s) {
      if (s == null || s.length < 1) return ""

    let start = 0;
    let end = 0

    for(let i = 0; i < s.length; i++){
        let length1 = lengthOfPalindrome(s, i, i);
        let length2 = lengthOfPalindrome(s, i, i+1);

        let length = Math.max(length1, length2);

        if (length > end - start) {
            if(length % 2 === 1){
                start = i - ((length - 1) / 2); 
                end = i + (length / 2)
            } else {
                start = i - ((length / 2) - 1); 
                end = i + (length / 2) 
            }
            
        }
    }   
    return s.slice(start, end + 1)
};

