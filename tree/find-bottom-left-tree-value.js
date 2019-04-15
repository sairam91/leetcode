/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * Time Complexity: O(n) -> Go through all nodes.
 * Space Complexity: O(n) -> Possibly store all node. What is requied is the max length of each level.
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
  if(root === null){
    return null;
  }
  let nodeQueue = [];
  nodeQueue.push(root);
  while(nodeQueue.length > 0){
    let childNodeQueue = [];
    for(let i = 0; i < nodeQueue.length; i++){
      let node = nodeQueue[i];
      if(node.left !== null){
          childNodeQueue.push(node.left);
      }
      if(node.right !== null){
          childNodeQueue.push(node.right);
      }
    }
    if(childNodeQueue.length === 0){
      // If the last left node is reached.
      break;
    }
    nodeQueue = childNodeQueue;
  }
  return nodeQueue[0].val;
};
