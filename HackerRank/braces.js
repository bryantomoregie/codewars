const isOpeningBrace = (char) => {
  // return (char === '[' || char === '{' || char === '(')
  return "[{(".includes(char);
};

const matchingbraces = (openingBrace, closingBrace) => {
  //if opening brace and closing brace are equal return true
  //if not return false
  if (openingBrace === "[" && closingBrace === "]") {
    return true;
  }
  if (openingBrace === "{" && closingBrace === "}") {
    return true;
  }
  if (openingBrace === "(" && closingBrace === ")") {
    return true;
  }
  return false;
};

const checkbraces = (string) => {
    
  const stack = [];
  for (let char in string) {
    if (isOpeningBrace(char)) {
      stack.push(char);
    } else {
      const lastElement = stack.pop();
      if (matchingbraces(lastElement, char)) {
      } else {
        return false;
      }
    }
  }
  return true;
  //return true if strings braces match
  //return false if strings braces don't match
};

function braces(arr) {
  for (let str in arr) {
    if (!checkbraces(str)) {
      return "NO";
    }
  }
  return "YES";
}

console.log(braces(['[{}]']))
