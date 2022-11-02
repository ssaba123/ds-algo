let phrase = 'This is the new sentence repeat repeat that that clue'
let reg = /[aeiou]/ig
let result = phrase.match(reg).map(i=> i=0)

console.log(result)