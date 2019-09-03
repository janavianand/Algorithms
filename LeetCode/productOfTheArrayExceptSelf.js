var productExceptSelf = function(nums) {
    let left = [1];
    let right = [1]
    let result = []
    for(let i=0;i<nums.length-1;i++){
        left.push(nums[i]*left[i])
    }
    for(let k=nums.length-1;k>0;k--){
        right.unshift(nums[k]*right[0])
    }
    console.log(left)
    console.log(right)
    for(let a=0;a<nums.length;a++){
        result.push(left[a]*right[a])
        console.log(result)
    }
    return result
};
