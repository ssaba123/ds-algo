// Given a string, return the reversed version of it

// Create the reverseStr function
function reverseStr(str){
  
    // initialize a variable that will store the reversed string
    let reversed = '';
   
    // create a loop to go through every character in the string
    for(let i = 0; i <= str.length-1; i++){
    
      // add each letter to the beginning of revered string variable
      reversed = str[i] + reversed 
    }
    
    // return the reversed string
    return reversed 
  }
  
  // invoke the reverseStr function
  reverseStr('sunny') // expected output: ynnus 
  
  // Note: If you are running the code in a VSCode terminal, 
  // make sure you wrap the function invocation in console.log()