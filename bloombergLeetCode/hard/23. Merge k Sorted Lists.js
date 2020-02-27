/*

Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:

Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6

Link - https://leetcode.com/problems/merge-k-sorted-lists/

Solution - https://leetcode.com/problems/merge-k-sorted-lists/solution/

*/

/**
  * Definition for singly-linked list.
  * function ListNode(val) {
  *     this.val = val;
  *     this.next = null;
  * }
  */
/**
  * @param {ListNode[]} lists
  * @return {ListNode}
  */
var mergeKLists = function(lists) {
    if(!lists.length){
        return null
    }
    if(lists.length === 1){
        return lists[0]
    }

    while(lists.length !== 1){
        let list1 = lists.shift()
        let list2 = lists.shift()

        lists.push(merge2Lists(list1,list2))
    }

    return lists[0]
};

function merge2Lists(list1,list2){
    let node1 = list1
    let node2 = list2

    let dummy = new ListNode(null)
    let pointer = dummy

    while(node1 && node2){
        if(node1.val < node2.val){
            pointer.next = node1
            node1 = node1.next
        }else{
            pointer.next = node2
            node2 = node2.next
        }
        pointer = pointer.next
    }

    if(node1){
        pointer.next = node1
    }

    if(node2){
        pointer.next = node2
    }
    return dummy.next
}
