// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// other's solution which is cleaner 

function anagrams(stringA, stringB) {
    // will return true/false since this is a deep comparison
    return cleanupStr(stringA) === cleanupStr(stringB);
}

function cleanupStr(str) {
    // regex to skip any special chars, lowercase the string, splti, sort and join back up
    return str.replace(/[^\w]g/, '').toLowerCase().split('').sort().join();
}


anagrams('RAIL! SAFETY! c', 'fairy tales')

module.exports = anagrams;



/*
I've mapped out two strings, lowercased letters since it does not matter, and used regex to only let in characters.
Get string maps
Iterate over longest map
if key/pair value of both maps match, it's an anagram, else false. 
*/