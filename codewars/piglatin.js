//https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript


function pigIt(str){                         
    let arr = str.split(' ')
    const map = arr.map((word) =>
        word.slice(1).concat(word[0]) + "ay" + ''
    )
    if(map[map.length - 1] === ("!ay" )){
      map.pop()
      return map.join(' ') + ' ' + "!"
    }
    if(map[map.length - 1] === ("?ay" )){
      map.pop()
      return map.join(' ') + ' ' + "?"
    }
    return map.join(' ')
}
  console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay


  /*

    Move the first letter of the word to the end
    then add ay

    .pop will pop off the first element and will return that element
    .push will add it to the back 
    and then concat ay
    


  */