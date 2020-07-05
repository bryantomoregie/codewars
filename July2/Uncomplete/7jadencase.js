String.prototype.toJadenCase = function () {
    //turn string into an array
    //set counter
    //for each member in the array caps the first elememt
    //return into array
    //turn it to a string
    //returns the string 
  };

// 'hi my name is muhammad'.toJadenCase(); // 'Hi My Name Is Muhammad'
String.prototype.toJadenCase = function () {
  return this.split(' ').map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ')
};


  // String.prototype.toJadenCase = function () {
  //   //...
  //   const currentString = this;
  //   let words = currentString.split(' ')
  //   var newWords = []
  //   for (let i = 0; i < words.length; i++) {
  //     let currentWord = words[i].toLowerCase();
  //     let newWord = ''
  //     for (let j = 0; j < currentWord.length; j++) {
  //       if (j === 0) {
  //         newWord += currentWord[j].toUpperCase()
  //       } else {
  //         newWord += currentWord[j]
  //       }
  //     }
  //     newWords.push(newWord)
  //   }
  //   return newWords.join(' ');
  // };

  const coolStr = 'the sUn is very briGht and hot today'
  console.log(coolStr.toJadenCase()) // ["H"]

  
  coolStr.toLowerCase(); // 'the sun is very bright and hot today';
  coolStr.toJadenCase(); // 'The Sun Is Very Bright And Hot Today';

  //String.prototype is basically us creating a function that can be called on a string
  //what we'll use to represent the string is this
  //I used a loop within a loop
  //.split(' ') splits string into array of elements
  // === checks to see if there equality including type equality
  //string + string combines string
  //.join(' ') joins together all strings in an array into one string
  
