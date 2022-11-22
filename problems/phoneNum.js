function createPhoneNumber(numbers){

return numbers.reduce((curr,acc) => curr.replace('0', acc), "(000) 000-0000")

}

  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))