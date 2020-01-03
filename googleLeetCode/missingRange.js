var findMissingRanges = function(nums, lower, upper) {
    let result = []

    if(!nums.length && !lower && !upper) return result

    if(!nums.length) {
        if(lower === upper){
            result.push(''+lower)
        }else{
            result.push(''+lower+'->'+upper)
        }
    }
    let i = 0;
    if (lower < nums[i]) {
        if(lower+1 === nums[i]){
            result.push(''+lower)
        }else{
           result.push(''+lower+'->'+(nums[i]-1))
        }
    }

    if(upper > nums[nums.length-1]) {
        nums.push(upper+1)
    }

    while(i<nums.length-1){
        if(nums[i] !== nums[i+1] && nums[i]+1 !== nums[i+1]){
            if(nums[i]+1 === nums[i+1]-1){
                result.push(''+ (nums[i]+1))
            }else{
                let str = ''
                str += (nums[i]+1) + '->' + (nums[i+1]-1)
                result.push(str)
            }
        }
        i+=1
    }

    return result
};
