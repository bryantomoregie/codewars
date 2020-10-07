//https://www.codewars.com/kata/52742f58faf5485cae000b9a

var year = 31535000;
var day = 86400;
var hour = 3600;
var minute = 60;
var second = 1;

var stringArr = [];
var str = " ";

function secondsSec(seconds) {
  seconds === 1
    ? stringArr.push(`${seconds} second`)
    : stringArr.push(`${seconds} seconds`);
}

function minutesSec(seconds) {
  if (seconds < minute) return secondsSec(seconds);
  let minutes = Math.floor(seconds / minute);
  let remainder = seconds % minute;
  minutes === 1
    ? stringArr.push(`${minutes} minute`)
    : stringArr.push(`${minutes} minutes`);
  if (remainder === 0) return;
  secondsSec(remainder);
}

function hoursSec(seconds) {
  if (seconds < hour) return minutesSec(seconds);
  let hours = Math.floor(seconds / hour);
  let remainder = seconds % hour;
  hours === 1
    ? stringArr.push(`${hours} hour`)
    : stringArr.push(`${hours} hours`);
  if (remainder === 0) return;
  minutesSec(remainder);
}

function daysSec(seconds) {
  if (seconds < day) return hoursSec(seconds);
  let days = Math.floor(seconds / day);
  let remainder = seconds % day;
  days === 1 ? stringArr.push(`${days} day`) : stringArr.push(`${days} days`);
  if (remainder === 0) return;
  hoursSec(remainder);
}

function yearsSec(seconds) {
  if (seconds < year) return daysSec(seconds);
  let years = Math.floor(seconds / year);
  let remainder = seconds % year;
  years === 1
    ? stringArr.push(`${years} year`)
    : stringArr.push(`${years} years`);
  if (remainder === 0) return;
  daysSec(remainder);
}

function formatDuration(seconds) {
  if (seconds === 0) return "now";

  yearsSec(seconds);

  for (let i = 0; i < stringArr.length; i++) {
    if (stringArr.length === 1) {
      return stringArr[0];
    }
    if (i === stringArr.length - 2) {
      str += stringArr[i] + " ";
    }
    if (i === stringArr.length - 1) {
      str += "and " + stringArr[i];
    } else if (i !== stringArr.length - 2 && i !== stringArr.length - 1) {
      str += stringArr[i] + ", ";
    }
  }

  return str;
}

console.log(formatDuration(3662));

/*

if 0 return now
Divide by 31,536,000 to get years 
86,400 econds in a day
3600 seconds in an hour
60 seconds in a minute
seconds

the largest amount years, next days, next hours, and non-zero number is prefaced by and 

Maybe for loop, and when we get to the last element add and 

*/
