//Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
/* Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6] */

//Input1 is padded with zero to merge input 2

var merge = function(nums1, m, nums2, n) {
    let p1 = m-1
    let p2 = n-1
    let p = nums1.length-1

    while(p>=0){
        if(p2<0 || (nums1[p1] > nums2[p2])){
            nums1[p] = nums1[p1]
            p1 -= 1
        }else if(p1<0 || (nums2[p2] >= nums1[p1])){
            nums1[p] = nums2[p2]
            p2 -= 1
        }
        p -= 1
    }
};
