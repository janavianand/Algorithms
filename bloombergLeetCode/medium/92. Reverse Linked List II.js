
/*
Reverse a linked list from position m to n. Do it in one-pass.
Note: 1 ≤ m ≤ n ≤ length of list.
Example:
Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL
Accepted
*/
// Dont forgot to address the edge cases (always with liked list)
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if(!head){
        return null
    }
    if(m>=n){
        return head
    }
    let len = 0
    let node = new ListNode(0)
    node.next = head
    head = node
    while(node && len < n){
        if(len+1 === m){
            let reverse = node.next
            node.next = reverseLinkedList(reverse,n,len)
            len = n-1
        }
        node = node.next
        len+=1
    }
    return head.next
};
function reverseLinkedList(node,n,length){
    let newList = null
    while(node && n > length){
        let newNode = new ListNode(node.val)
        newNode.next = newList
        newList = newNode
        node = node.next
        length+=1
    }
    if(node){
        let pointer = newList
        while(pointer.next){
            pointer = pointer.next
        }
        pointer.next = node
    }
    return newList
}

