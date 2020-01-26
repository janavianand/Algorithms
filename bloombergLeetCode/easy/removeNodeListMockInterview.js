/*

Remove all elements from a linked list of integers that have value val.

Example:

Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5

Mock Interview

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(!head){
        return null
    }
    let list = new ListNode(0)
    list.next = head
    let pointer = list
    while(pointer){
        if(pointer.next && pointer.next.val === val){
            let nextNode = pointer.next.next || null
            pointer.next = nextNode
        }else{
            pointer = pointer.next
        }
    }
    return list.next
};

