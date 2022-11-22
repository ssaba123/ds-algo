function reverse(str){
    if(!str || str.length <= 1 || typeof str !== 'string') return str
  let reversedStr = []
    let strArr = str.split('')
    for(let i = str.length -1; i >= 0; i--){
     reversedStr.push(strArr[i])
    }
    return reversedStr.join('')
  }
  
  function reverse2(str){
    return str.split('').reverse().join('')
  }
  
  const reverse3 = str => str.split('').reverse().join('')
  const reverse4 = str => [...str].reverse().join('')
  
  console.log(reverse(43))
  console.log(reverse2('Hey there'))
  console.log(reverse3('jello and ham'))
  console.log(reverse4('americana music is not...good'))
  