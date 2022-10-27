var twoSum = function(nums, target) {
// start at the first number
    let curr = 0;
    let num1 = nums[curr];
    let index = '';
    
    for(let i = 1; i <= nums.length -1; i++ ){
        // if the two numbers = target, return the index 
        if(num1 + nums[i] === target){
           index = `[${curr}, ${i}]`
        } else { // otherwise make the first number, the number next to the current pointer
            curr++;
            num1 = nums[curr]
        }
    }   
    return index
};


console.log(twoSum([3,3], 6))
