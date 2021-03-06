
/*
Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.
You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.
Example 1:
Input: 1->2->3->4->5->NULL
Output: 1->3->5->2->4->NULL
Example 2:
Input: 2->1->3->5->6->4->7->NULL
Output: 2->3->6->7->1->5->4->NULL
Link - https://leetcode.com/problems/odd-even-linked-list/
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
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if(!head){
        return head
    }
    let pointer = head
    let length = 1
    let end = head
    while(end.next){
        end = end.next
        length += 1
    }
    if(length < 3){
        return head
    }
    while(length>1){
        let node = pointer.next
        pointer.next = node.next
        node.next = null
        end.next = node
        end = end.next
        pointer = pointer.next
        length -= 2
    }
    return head
};
