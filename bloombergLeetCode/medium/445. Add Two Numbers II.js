/*

You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

Example:

Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if(!l1 && l2){
        return null
    }

    if(!l1){
        return l2
    }

    if(!l2){
        return l1
    }

    let stack1 = []
    let stack2= []

    let pointer = l1

    while(pointer){
        stack1.push(pointer.val)
        pointer = pointer.next
    }

    pointer = l2

    while(pointer){
        stack2.push(pointer.val)
        pointer = pointer.next
    }

    let result = null
    let carry = 0

    while(stack1.length || stack2.length ){
        let value1 = stack1.pop() || 0
        let value2 = stack2.pop() || 0

        let sum = value1+value2+carry
        carry = sum > 9 ? 1 : 0
        sum = sum % 10

        let newNode = new ListNode(sum)

        newNode.next = result

        result = newNode
    }

    if(carry){
        let newNode = new ListNode(carry)
        newNode.next = result
        result = newNode
    }

    return result
};
