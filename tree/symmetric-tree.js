/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(root === null){
        return true;
    }
    let node = root;
    let queue = [];
    queue.push(node);
    while(queue.length > 0){
        let start =0, end = queue.length - 1;
        while(start < end){
            if(queue[start] !== null && queue[end] !== null ){
                if(queue[start].val !== queue[end].val){
                    return false;
                }
            } else {
                const isNodeSame = queue[start] === queue[end];
                if(!isNodeSame){ return false; }
            }

            start++;
            end--;
        }

        let childQueue = [];
        for(let i = 0; i< queue.length; i++){
            let node = queue[i];
            if(node === null){
                continue;
            }
            childQueue.push(node.left);
            childQueue.push(node.right);
        }
        queue = childQueue;
    }
    return true;
};
