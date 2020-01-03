/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
   if(!head){
       return head
   }

    let node = head

    while(node){
        if(!node.child){
            node = node.next
        }else{
            let child = node.child
            while(child.next){
                child = child.next
            }
            child.next = node.next

            if(node.next){
                node.next.prev = child
            }

            node.child.prev = node

            node.next = node.child

            node.child = null

            node = node.next
        }
    }
    return head
};
