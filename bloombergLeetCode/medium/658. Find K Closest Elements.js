

/*

Given a sorted array, two integers k and x, find the k closest elements to x in the array. The result should also be sorted in ascending order. If there is a tie, the smaller elements are always preferred.

Example 1:
Input: [1,2,3,4,5], k=4, x=3
Output: [1,2,3,4]
Example 2:
Input: [1,2,3,4,5], k=4, x=-1
Output: [1,2,3,4]
Note:
The value k is positive and will always be smaller than the length of the sorted array.
Length of the given array is positive and will not exceed 104
Absolute value of elements in the array and x will not exceed 104

Link - https://leetcode.com/problems/find-k-closest-elements/

Solution - https://leetcode.com/problems/find-k-closest-elements/discuss/490226/JavaScript-Binary-Search

*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    if(!arr.length){
        return arr
    }

    if(k >= arr.length){
        return arr
    }

    if(x<arr[0]){
        return arr.slice(0,k)
    }

    if(x>arr[arr.length-1]){
        return arr.slice(arr.length-k,arr.length)
    }

    let start = 0
    let end = arr.length-1

    let index = null

    while(start<end){
        let mid = Math.floor((start+end)/2)

        if(arr[mid] === x){
            index = mid
            break;
        }
        if(arr[mid] > x){
            end = mid-1
        }else{
            start = mid+1
        }
    }

    let smallerIndex = arr[start] <= arr[end] ? start : end

    index = index=== null ? smallerIndex : index

    let result = []

    let lp = index-1
    let rp = index

    while(k>0){
        let left = lp>=0 ? arr[lp] : Infinity
        let right = rp<arr.length ? arr[rp] :Infinity
        if(Math.abs(left-x) <= Math.abs(right-x)){
            result.unshift(left)
            lp -= 1
        }else{
            result.push(right)
            rp += 1
        }

        k-=1
    }
    return result
};
