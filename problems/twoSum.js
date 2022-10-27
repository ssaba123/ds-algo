var twoSum = function(nums, target) {
// start pointer at first position (index of 0)
    let curr = 0;
// set num1 to element at curr position
    let num1 = nums[curr];
// set an empty index
    let index = '';

    // create a loop to go through every element in the array
    for(let i = 1; i <= nums.length -1; i++ ){
        // if the two numbers = target, return the index 
        if(num1 + nums[i] === target){
           index = `[${curr}, ${i}]`
        } else if(i === nums.length-1) { 
            // otherwise move the pointer up one position
            curr++;
            // set pointer to new element
            num1 = nums[curr]
        }
    }  
    
    // return the index
    return index
};


console.log(twoSum([2,7,11,15], 9)) // expected output: [0,1]
console.log(twoSum([22,9,1,2], 10)) // expected output: [1,2] CURRENTLY FAILS
console.log(twoSum([10,7,30,190], 200)) // expected output: [0,3] 
