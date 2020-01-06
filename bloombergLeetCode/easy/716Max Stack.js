/*

Design a max stack that supports push, pop, top, peekMax and popMax.

push(x) -- Push element x onto stack.
pop() -- Remove the element on top of the stack and return it.
top() -- Get the element on the top.
peekMax() -- Retrieve the maximum element in the stack.
popMax() -- Retrieve the maximum element in the stack, and remove it. If you find more than one maximum elements, only remove the top-most one.
Example 1:
MaxStack stack = new MaxStack();
stack.push(5);
stack.push(1);
stack.push(5);
stack.top(); -> 5
stack.popMax(); -> 5
stack.top(); -> 1
stack.peekMax(); -> 5
stack.pop(); -> 1
stack.top(); -> 5

Link - https://leetcode.com/problems/max-stack/

*/

/**
 * initialize your data structure here.
 */
var MaxStack = function() {
    this.stack = []
    this.max = []
};

/**
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function(x) {
    this.stack.push(x)
    if(!this.max.length || this.max[this.max.length-1] <= x){
        this.max.push(x)
    }
    return x
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function() {
    if(this.stack.length){
        let item = this.stack.pop()

        //No need to worry about the item being in the mid or behind the tomost of this.max. it is taken car of in the popMax()

        if(this.max[this.max.length-1]===item){
            this.max.pop()
        }
        return item
    }
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function() {
    if(this.stack.length){
        return this.stack[this.stack.length-1]
    }else{
        return null
    }
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function() {
    if(this.max.length){
        return this.max[this.max.length-1]
    }else{
        return null
    }
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function() {
    if(this.max.length){
        let item = this.max.pop()

        let temp = []
        let flag = true
        while(this.stack.length && flag){
            let num = this.stack.pop()
            if(item !== num){
                temp.push(num)
            }else{
                flag = false
            }
        }
        while(temp.length){
            this.push(temp.pop())
        }
        return item
    }else{
        return null
    }

};

/**
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */

