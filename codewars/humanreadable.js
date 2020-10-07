//https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript
let hours = 0;
let minutes = 0;
let secs = 0;

function getMinutes(seconds){
    minutes = Math.floor(seconds/60)
    secs = seconds % 60 
}

function humanReadable(seconds) {
    if (seconds === 0) return "00:00:00"
    
    hours = Math.floor(seconds/3600)
    getMinutes(seconds % 3600)
    
    return `${hours < 10 ? 0 : ''}${hours}:${minutes < 10 ? 0 : ''}${minutes}:${secs < 10 ? 0 : ''}${secs}`
}

let seconds = 359999

console.log(humanReadable(seconds))

//'99:59:59'

/*
write a function called get hours that will get the hours and the remainder. Update hours 
the results of that will be passed into get minutes that will do the same 
the results of that will be passed into get seconds. Probably wont need this one though. 

(86399), '23:59:59


hour = 3600 seconds
minute = 60 seconds
seconds = 1 second

*/


  