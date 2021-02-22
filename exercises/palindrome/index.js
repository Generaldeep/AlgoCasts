// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    const strReversed = str.split('').reverse().join('');
    return strReversed === str ? true: false;
}

module.exports = palindrome;



/* 
The key in this function is to think about what the end result is, and how to get there. 
In the end, I want to make a deep comparison between two strings, and return their results.
So really the work in this algo is reversing the string, comparing is easy. Palindrome and
string reversal are essentailly the same, with one extra line of work. 
*/