/* Given an array nums and a value val, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory. */

//____________________________________________

//Method1
//____________________________________________

var removeElement = function(nums, val) {
    let len=0;
    for(let j=0;j<nums.length;j++){
        if(nums[j] !== val){
            nums[len] = nums[j]
            len += 1
        }
    }
    return len
};
//____________________________________________

//Method2
//____________________________________________

//var removeElement = function(nums, val) {
    // let len=0;
    // for(let j=0;j<nums.length;j++){
    //     if(nums[j] !== val){
    //         nums[len] = nums[j]
    //         len += 1
    //     }
    // }
    // return len

//____________________________________________
//Method3
//____________________________________________

//     for(let j=0;j<nums.length;j++){
//         if(nums[j] === val){
//             nums.splice(j,1)
//             j -= 1
//         }
//     }
//     return nums.length
// };
