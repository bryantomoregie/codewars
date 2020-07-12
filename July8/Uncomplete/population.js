//https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/javascript

function nbYear(p0, percent, aug, p) {
    let rounds = 0;
    if (p0 > p) {
       
    } else {
        rounds++
        console.log(rounds)
        p0 = p0 + (p0 * (percent * 0.01)) + aug
        console.log(p0)
        nbYear(p0, percent, aug, p);
    }
    return rounds   
}

console.log(nbYear(1000, 2, 50, 1200))
//if total < p 
// function nbYear(total, percent, aug, p)
//or maybe p0 = this stuff
//rounds ++ 1
//else return rounds 