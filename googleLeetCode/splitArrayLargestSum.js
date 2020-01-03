/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
    if(!nums.length) return 0

    let max = nums.reduce((a,b)=>a+b)
    let min = Math.max(...nums)

    if(m<=1) return max

    while(min < max){
        let mid = Math.floor((min+max)/2)
        let temp = 0
        let divide = 1
        for(let i=0;i<nums.length;i++){
            if(temp+nums[i] > mid){
                temp = nums[i]
                divide += 1
            }else{
                temp += nums[i]
            }

        }
        if(divide > m){
            min = mid + 1
        }else{
            max = mid
        }
    }
   return min
};
