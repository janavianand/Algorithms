/*


Shuffle a set of numbers without duplicates.
Example:
// Init an array with set 1, 2, and 3.
int[] nums = {1,2,3};
Solution solution = new Solution(nums);
// Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.
solution.shuffle();
// Resets the array back to its original configuration [1,2,3].
solution.reset();
// Returns the random shuffling of array [1,2,3].
solution.shuffle();
Link - https://leetcode.com/problems/shuffle-an-array/
*/
/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.array = nums
    this.copy = [...nums]
    this.limit = nums.length
};
/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.copy = [...this.array]
    return this.array
};
/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    for(let i=0;i<this.limit;i++){
        swap(this.copy,i,generateRandom(i,this.limit))
    }
    return this.copy
};
/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
function generateRandom(min,max){
    return Math.floor(Math.random()*(max-min))+min
}
function swap(arr,i,j){
    [arr[i],arr[j]] = [arr[j],arr[i]]
}
