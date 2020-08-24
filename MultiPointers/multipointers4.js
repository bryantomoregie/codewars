https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/quiz/4410596#content

function isSubsequence(string1, string2) {
    let pointer1 = 0;
    let pointer2 = 0;
    
    while(pointer2 <= (string2.length - string1.length - 1) ){
        if (pointer1 === string1.legnth - 1) return true;
        else if (string1[pointer1] === string2[pointer2]) {
            pointer1++;
            pointer2++;
           
        }else{
            
            pointer1 = 0;
            pointer2++;
        }
    }
    
    return false
  }

  console.log(isSubsequence("hello", "hello world"))