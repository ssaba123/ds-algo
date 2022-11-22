function mergeSortedArrays(arr1, arr2){
   return [...arr1, ...arr2].sort((a,b)=> a - b)

// const mergedArrays = [...arr1,...arr2]
// const sortedArray = []
// let point1 = 0;
// let point2 = 0;
// for(let i =0; i< mergedArrays.length; i++){
//   if(mergedArrays[start])
//    start++

// }
// return mergedArrays


}

console.log(mergeSortedArrays([2,4,6,14], [4,7,9,11,14]))