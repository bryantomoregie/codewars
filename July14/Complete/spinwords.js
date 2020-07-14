//https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

function spinWords(){
    //split('') string 
    //if 
    //.split('').reverse().join('')
  }


  function spinWords(words){
    let arr = words.split(' ')
    let newArr = []
    arr.map(words => {
        if (words.length >= 5) {
            newArr.push(words.split('').reverse().join(''))
        } else {
            newArr.push(words)
        }
    })
    return newArr.join(' ')
  }

  //.map does not change the original array

console.log(spinWords("Hey fellow warriors"))
// Test.assertEquals(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
// Test.assertEquals(spinWords("This is a test"), "This is a test");
// Test.assertEquals(spinWords("This is another test"), "This is rehtona test");
// Test.assertEquals(spinWords("You are almost to the last test"), "You are tsomla to the last test");
// Test.assertEquals(spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more");
// Test.assertEquals(spinWords("Seriously this is the last one"), "ylsuoireS this is the last one");