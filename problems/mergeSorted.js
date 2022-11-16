function mergeSortedArrays(arr1, arr2){
   return [...arr1, ...arr2].sort((a,b)=> a - b)
}

console.log(mergeSortedArrays([2,4,6,14], [4,7,9,11,14]))