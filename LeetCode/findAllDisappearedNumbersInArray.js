var findDisappearedNumbers = function(nums) {
    let result = []
    if(!nums.length) return result
    for(let numsPointer = 0;numsPointer<nums.length;numsPointer++){
        let index = Math.abs(nums[numsPointer])-1;

        if(nums[index]>0){
            nums[index] *= -1
        }
    }
    for(let index=0;index<nums.length;index++){
        if(nums[index]>0){
            result.push(index+1)
        }
    }
    return result
};
