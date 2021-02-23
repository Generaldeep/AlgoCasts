// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {

   for (let row = 0; row < n; row++) {
       let str = '';
       for (let col = 0; col < n; col++) {
           if (col <= row) {
               str += '#';
           } else {
               str += ' ';
           }
       }
       console.log(str);
   }

   return; 
}

steps(3);

/*
Had to get the solution above. It's simple enough. I was trying to use .repeat() function to 
add spaces in one iteration of a loop. But, kept getting one additonal space. Didn't bother to 
continue messing around. 

This solution is creating one row and filling each column in the second loop with a space or '#' 
console.log(str) per iteration. Good way to create a basic matrix. What else is this code good for?
What other problems can I solve?
*/

module.exports = steps;
