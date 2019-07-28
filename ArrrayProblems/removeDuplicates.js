/* Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory. */

var removeDuplicates = function(nums) {
    let i=0;
    for(let j=i+1;j<nums.length;j++){
        if(nums[i] === nums[j]){
            nums.splice(j,1)
            j=j-1
        }else{
            i = j
        }
    }
    return nums.length
    // let setArr = new Set()
    // for(let i=0;i<nums.length;i++){
    //     setArr.add(nums[i])
    // }
    // console.log(Array.from(setArr))
    // return Array.from(setArr)
};
