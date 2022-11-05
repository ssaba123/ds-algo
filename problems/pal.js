function isPalindrome(x) {
 let palindrome = ''
 for(let letter of x.toLowercase() ){
   palindrome = letter + palindrome
 }
 return palindrome === x
}

console.log(isPalindrome('ffdjsfk'))