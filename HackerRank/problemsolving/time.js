function timeInWords(h, m) {

    let numbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "quarter", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twent one", "twenty two", "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine", "half past"]
    
    if (m === 15) return `quarter past ${numbers[h-1]}`;
    if (m === 30) return `half past ${numbers[h-1]}`;
    if (m === 45) return `quarter to ${numbers[h]}`;
    if (m === 1) return `${numbers[m-1]} minute past ${numbers[h-1]}`;
    if (m >= 1 && m < 30) return `${numbers[m-1]} minutes past ${numbers[h-1]}`;
    if (m > 30) return `${numbers[(60 - m) - 1]} minutes to ${numbers[h]}`;    
    else return `${numbers[h-1]} o' clock`          
    }



