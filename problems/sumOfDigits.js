function digitalRoot(number) {
   numArr = number.toString().split("")
   number = numArr.reduce((a,b) => parseInt(a) + parseInt(b))
    return number == 0 ? 0 : number > 9 ? digitalRoot(number) : number  
}


console.log(digitalRoot(128))

