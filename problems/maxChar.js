const str = 'heeey'
const charMap = {};

for(char of str){
   charMap[char] = charMap[char] + 1 || 1 
}

let max = 0;
let maxChar = '';

for(char of str){
   if(charMap[char] > max){
    max = charMap[char] 
    maxChar = char
   }   
}

console.log(`${maxChar} appears the most times at a record ${max} times!`)
