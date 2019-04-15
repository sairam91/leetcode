/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * Time Complexity : O(n) -> Have to traverse through all nodes once to get the sum.
 * Space Complexity: Max stack depth is O(D), where D is the depth of the tree.
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
  if(root === null){
    return 0;
  }
  return sumOfRootToLeaf(root, 0, 0);
};

var sumOfRootToLeaf = function(node, currSum, result){
  if(node.left == null && node.right === null){
    // Reached a left node add to the result and return it.
    return result + currSum*2 + node.val;
  }else if(node.left === null && node.right !== null){
    // Left node is null get sum from the right nodes.
    return sumOfRootToLeaf(node.right, currSum*2 + node.val, result);
  }else if(node.right === null && node.left !==null){
    // Right node is null return from left nodes
    return sumOfRootToLeaf(node.left, currSum*2 + node.val, result);
  } else {
    // Has both left and right nodes, return from both directions.
    return sumOfRootToLeaf(node.left, currSum*2 + node.val, result) + sumOfRootToLeaf(node.right, currSum*2 + node.val, result);
  }
};
