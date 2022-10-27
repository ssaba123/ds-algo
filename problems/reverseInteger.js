// Given an integer, return its reversed form

// create the reverseInt function
function reverseInt(int){
    // create a variable to store reversed integer
    // to reverse, turn to string, then array, reverse and then back to string
    let reversed = int.toString().split('').reverse().join('');

   // turn the string back to a number (use Math.sign() to make it negative if int is negative) and return
   return parseInt(reversed) * Math.sign(int)
}

console.log(reverseInt(-879543)) // expected output: -345978