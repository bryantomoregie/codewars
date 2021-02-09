function reverseInt(n) {
   let str = n.toString();

   let st = ""

    if(n == 0)  return 0
   for(let i = str.length - 1; i >= 0; i--){
        st += str[i]
        console.log(i);
   }

   return n > 0 ? parseInt(st) : parseInt(st) * -1
}

let n = 189
console.log(reverseInt(n))