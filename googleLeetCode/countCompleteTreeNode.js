var countNodes = function(root) {
    if(!root) return 0
    let queue = [root];
    let count = 0;
    while(queue.length){
        let node = queue.shift();
        count += 1;
        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
    }
    return count
};
