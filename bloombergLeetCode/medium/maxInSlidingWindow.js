/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if(nums.length < 2){
        return nums
    }

    if(k < 2){
        return nums
    }

    let result = []

    let start = 0
    let end = start+1

    let max = nums[0]
    let maxIndex = 0


    while(end < nums.length){

       if(max <= nums[end]){
           max = nums[end]
           maxIndex = end
       }
        if(end-start === k-1){
            result.push(max)
            if(start === maxIndex && nums[end+1] < max){
                max= -Infinity
                maxIndex = -1
            }
            start += 1
        }
        end += 1
        if(max === -Infinity){
            let temp = start
            while(temp < end){
               if(max <= nums[temp]){
                   max = nums[temp]
                   maxIndex = temp
               }
                temp += 1
            }
        }

    }

    return result
};
