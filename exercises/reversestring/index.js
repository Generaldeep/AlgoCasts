// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reverse().join('');
}

module.exports = reverse;


/* 
We cannot reverse a string but there is a built in reverse an array method. 
Turn string into an array, reverse it and use built in array join method to
turn array back into a string. 
*/