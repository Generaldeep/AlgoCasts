// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const returnObj = {key: '', value: 0 };
    const stringApp = {};
    const strChars = str.split('');
    
    for (let char of strChars) {
        if (stringApp[char] === undefined) {
            stringApp[char] = 1; 
        } else {
            stringApp[char]++; 
        }
    }
    
    for (let prop in stringApp) {
        if (stringApp[prop] > returnObj.value) {
            returnObj.key = prop;
            returnObj.value = stringApp[prop];
        }
    }
    return returnObj.key;
}

// maxChar('abcccccccd');

module.exports = maxChar;
