function vowelOne(word){
   let newWord = word.replace(/[^aeiouy]/ig, 0)   
   return newWord.replace(/[aeiouy]/ig, 1)  
   }

console.log(vowelOne('hello'))