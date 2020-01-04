/*

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.


Example:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.

*/

/*

Algo

1. Design a simple stack
2. Have a class node that has a current min value saved. update the min value stack as per the value pushed accordingly. so popping the node, the min value stored will be the next min value of the stack

*/


/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.min = Infinity
    this.stack = []
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    let node = new Node(x,this.min)
    this.stack.push(node)
    this.min = Math.min(this.min,x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let node = this.stack.pop()
    this.min = node.min
    return node.value
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1].value
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min
};

class Node{
    constructor(value,min){
        this.value = value
        this.min = min
    }
}
/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
