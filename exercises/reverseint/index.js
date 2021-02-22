// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    // turn int into string, and follow string reverse algo
    let str =  n.toString().split('').reverse().join('');

    // if negative number, take '-' from end of string, add to front
    // substring(0, str.length-1) starts the string in the beginning, does not include last char which is '-' 
    if (str[str.length - 1] === '-') {
        str = str[str.length - 1] + str.substring(0, str.length-1);
    }
    return parseInt(str); 
}

reverseInt(189);

module.exports = reverseInt;
