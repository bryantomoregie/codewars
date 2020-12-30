//https://leetcode.com/problems/richest-customer-wealth/

var maximumWealth = function(accounts) {
         let maxTotal = 0;
    let tempTotal = 0;

    for(let i = 0; i < accounts.length; i++){
        for(let j = 0; j < accounts[i].length; j++){
            tempTotal += accounts[i][j];
        }
        if(tempTotal > maxTotal){
            maxTotal = tempTotal;
        }
        tempTotal = 0;
    }

    return maxTotal;
};

var maximumWealth = function(accounts) {
    let maxTotal = 0;
    let tempTotal = 0;

    for(let array of accounts){
        
        tempTotal = array.reduce((accumulator, currentValue) => accumulator + currentValue);
        
        if(tempTotal > maxTotal){
            maxTotal = tempTotal;
        }
        tempTotal = 0;
    }

    return maxTotal;
};

accounts = [[1,5],[7,3],[3,5]]

console.log(maximumWealth(accounts))
/*
Im given an array of arrays. I need to traverse each array, add up the numbers, and return the number with highest total.
I could do a for loop within a for loop, but thats demonically slow. 
I'll do both reduce and inner for loop 
*/