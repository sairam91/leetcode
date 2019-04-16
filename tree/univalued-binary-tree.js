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
var isUnivalTree = function(root) {
  if(root === null){
    return false;
  }
  return isUniVal(root, root.val);
};

var isUniVal = function(root, value){
  if(root === null){
    return true;
  }
  if(root.val !== value){
    return false;
  }
  return isUniVal(root.left, value) && isUniVal(root.right, value);
}
