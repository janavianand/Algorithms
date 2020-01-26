/*

A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.

The Linked List is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) where random pointer points to, or null if it does not point to any node.


Example 1:


Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
Example 2:


Input: head = [[1,1],[2,1]]
Output: [[1,1],[2,1]]
Example 3:



Input: head = [[3,null],[3,0],[3,null]]
Output: [[3,null],[3,0],[3,null]]
Example 4:

Input: head = []
Output: []
Explanation: Given linked list is empty (null pointer), so return null.

Link - https://leetcode.com/problems/copy-list-with-random-pointer/

*/

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(!head){
        return null
    }
    let map = new Map()

    let pointer = head
    let newHead = new ListNode(null)
    let newPointer = newHead

    while(pointer){
        newPointer.next = new ListNode(pointer.val)
        newPointer = newPointer.next
        map.set(newPointer,pointer)
        map.set(pointer,newPointer)
        pointer = pointer.next
    }

    newPointer = newHead.next
    pointer = head

    while(newPointer){
        let random = map.get(newPointer).random
        newPointer.random = map.get(random)
        pointer = pointer.next
        newPointer = newPointer.next
    }
    return newHead.next
};
