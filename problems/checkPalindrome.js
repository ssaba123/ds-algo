// Given a string, check if it is a palidrome. 
// Return true if it is a palindrome, false if not.

// A palindrome is a word that is the same when spelled backwards.
// eg: racecar = racecar

// To check for palidrome, create a reversed string and check if it
// is the same as original string


// Create a checkPalindrome function
function checkPalindrome(str){
    // initialize a variable to store the reversed string
    let reversed = '';

    // create a loop to go through every character in the string
    for(let i = 0; i <= str.length - 1; i++){

    // add each character to the beginning of the reversed string
    reversed = str[i] + reversed
    }

    // check if reversed string equal to original string
    return reversed == str ? true : false
}

// call the checkPalindrom function 
console.log(checkPalindrome('racecar')) // expected output: true
console.log(checkPalindrome('lol')) // expected output: true
console.log(checkPalindrome('notebook')) // expected output: false