var increasingTriplet = function(nums) {

    if(nums.length < 3) return false

    let min1 = Infinity
    let min2 = Infinity

    for(let i=0;i<nums.length-1;i++){
        if(nums[i]<nums[i+1]){
            if(min1 !== nums[i] || min2 !== nums[i+1]){
                if(min2 < nums[i]){
                    return true
                }
                if(min1 >= nums[i] && min2 >= nums[i+1]){
                    min1 = nums[i]
                    min2 = nums[i+1]

                }else{
                    return min2 !== Infinity
                }

            }
        }
    }
    return false
};
