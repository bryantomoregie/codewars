function DNAStrand(dna){
    //take in the string 
    //split it into an array
    //new array
    //for loop
    //if letter is A 
    //if else 
    //array.push 
    //return array 
  }

  let dna = "ATTGC"

  function DNAStrand(dna){
    let dnaArray = dna.split('')
    let returnedArray = []
    for (let i = 0; i < dnaArray.length; i++) {
      if (dnaArray[i] === 'A') {
        returnedArray.push('T')
      } else if (dnaArray[i] === 'T'){
        returnedArray.push('A')
      } else if (dnaArray[i] === 'C'){
        returnedArray.push('G') 
      } else if (dnaArray[i] === 'G') {
        returnedArray.push('C') 
      }
    }
    return returnedArray.join('')
  }
expected = 'TAACG'

console.log(DNAStrand(dna))