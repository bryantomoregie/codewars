//https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays&h_r=next-challenge&h_v=zen

function minimumBribes(q) {
    
    let i = 0;
    let totalMoves = 0

    for (let number of q){
        if ((number - i) > 3){
            return "Too chaotic"
        } 
        else if (number > i) {
            totalMoves += (number - i) - 1;
            i++
        } else {
            i++;
            continue
           
        }
    }

    return totalMoves

}

let newArray = [2, 1, 3, 5, 4]

console.log(minimumBribes(newArray))

/*

if number - index is > 3 
return Too chaotic

if not, 
create an incrementer and add the difference 
(number - index) - 1

*/