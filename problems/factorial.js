const factorial = n => {
 let sum = n;

 for(let i = n; i > 1; i--){
 sum *= i-1
 }

  return sum
};

  console.log(factorial(8))

