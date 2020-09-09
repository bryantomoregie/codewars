//https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
function checkMagazine(magazine, note) {
    let magazine_object = {};
    let note_object = {};

    for (let word of magazine) {
        magazine_object[word] = (magazine_object[word] || 0) + 1
    }

    for (let word of note) {
        note_object[word] = (note_object[word] || 0) + 1
    }

    for (let key in note_object) {
        if (!magazine_object[key] || magazine_object[key] < note_object[key]){ 
            console.log("No");
            return
        } else {
            continue
        }
    }

    console.log("Yes")
}

let magazine = ["apgo", "clm", "w", "lxkvg", "mwz", "elo", "bg", "elo", "lxkvg", "elo", "apgo", "apgo", "w", "elo", "bg"]
let note = ["elo", "lxkvg", "bg", "mwz", "clm", "w"]

console.log(checkMagazine(magazine, note))


/*

magazine is an array of strings 
note is an array of strings. Each word making up the ransom note 

checking to see if key is in the the second js object
If not, return No

if yes, check the value. If different, return NO.

If the whole note, is traversed, return Yes. 

*/