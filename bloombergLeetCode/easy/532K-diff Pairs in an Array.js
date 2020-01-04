/*

Given an array of integers and an integer k, you need to find the number of unique k-diff pairs in the array. Here a k-diff pair is defined as an integer pair (i, j), where i and j are both numbers in the array and their absolute difference is k.

Example 1:
Input: [3, 1, 4, 1, 5], k = 2
Output: 2
Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
Although we have two 1s in the input, we should only return the number of unique pairs.
Example 2:
Input:[1, 2, 3, 4, 5], k = 1
Output: 4
Explanation: There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).
Example 3:
Input: [1, 3, 1, 5, 4], k = 0
Output: 1
Explanation: There is one 0-diff pair in the array, (1, 1).

*/

//Method 1

var findPairs = function(nums, k) {
    if(nums.length === 0){
        return 0
    }
    nums.sort((a,b)=>a-b)
    let start = 0
    let end = 1
    let count = 0
    while(end<nums.length){
        let diff = nums[end]-nums[start]
        if( diff === k){
            count +=1
            start+=1
            while(nums[start] === nums[start-1]){
                start += 1
            }
            end+=1
            while(nums[end] === nums[end-1]){
                end+=1
            }
        }else if(diff<k){
            end += 1
        }else{
            start += 1
        }
        if(start === end){
            end+=1
        }
    }
    return count
};

//Method 2

var findPairs = function(nums, k) {
    if(nums.length === 0 || k <0){
        return 0
    }
    let count = 0
    let map = new Map()
    for(let i=0;i<nums.length;i++){
        map.set(nums[i],map.get(nums[i])+1 || 1)
    }
    map.forEach((value,key)=>{
        if(k===0){
            if(value>1){
                count += 1
            }
        }else{
            if(map.has(key+k)){
                count += 1
            }
        }
    })
    return count
};
