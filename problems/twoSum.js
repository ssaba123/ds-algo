var twoSum = function(nums, target) {
// start at the first number
    let num1 = nums[0];

    let index = '';
    
    for(let i = 1; i <= nums.length -1; i++ ){
        // if the two numbers = target, return the index 
        if(num1 + nums[i] === target){
           index = `[${nums[num1]}, ${i}]`
        } else { // otherwise make the first number, the number next to the current pointer
            num1 = nums[0+i]
        }
    }   
    return index
};


console.log(twoSum([2,4,8,1,15], 9))
