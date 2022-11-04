function vowelOne(word){
   return word.replace(/[^aeiou]/ig, 0).replace(/[aeiou]/ig, 1)  
   }

console.log(vowelOne('hello'))