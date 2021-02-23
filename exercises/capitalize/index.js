// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    const splitStrByEachLetter = str.split(' ');
    const newStringContainer = [];
    
    for (let char of splitStrByEachLetter) {
        const capitalizeFirstLetter = char[0].toUpperCase();
        newStringContainer.push(capitalizeFirstLetter + char.slice(1, char.length));
    }
    return newStringContainer.join(' ');
}


// capitalize('a short sentence');

module.exports = capitalize;
