// Given an integer, return it's reversed form

// create the reverseInt function
function reverseInt(int){
    // create a variable to store reversed integer
    let reversed = '';
    // turn number into a string
    let num = int.toString()
    // create a loop to go through each digit
    for( let i = 0; i <= num.length -1; i++){
        // add digit to beginning of reversed variable
        reversed = num[i] + reversed
    }

    // if negative, move negative sign from end to front
    if(reversed[reversed.length -1] === '-'){
    reversed = '-' + reversed 
    reversed = reversed.slice(0,-1)
    }

   // turn the string back to a number and return
   return reversed
}

console.log(reverseInt(-500)) // expected output: -005