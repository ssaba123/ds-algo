function abbreviate(word) {
let newStr = word.replace(/[aeiouy]/ig,'')
return newStr
}


console.log(abbreviate('hello'))