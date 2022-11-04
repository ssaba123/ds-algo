function vowelOne(word){
   let newWord = word.replace(/[^aeiou]/ig, 0)   
   return newWord.replace(/[aeiou]/ig, 1)  
   }

console.log(vowelOne('hello'))