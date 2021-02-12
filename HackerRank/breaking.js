//https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=30-day-campaign


function breakingRecords(scores) {
    let lowNumber = scores[0];
    let lowCounter = 0;

    let highNumber = scores[0];
    let highCounter = 0;


    for(let int of scores){
        if(int > highNumber) {
            highNumber = int;
            highCounter++;
        }
        else if(int < lowNumber){
            lowNumber = int;
            lowCounter++;
        } else{
            continue;
        }
    }

    return new Array(highCounter, lowCounter)

}


let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]

console.log(breakingRecords(scores));

/*
GO THRU ARR ONCE. iF NUMBER IS HIGHer update high and increment counter, if number is lower sams
push into an empty array and return 
*/