/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if ( !root ) {
        return 0;
    }
    else {
        return Math.max( maxDepth(root.left), maxDepth(root.right) ) + 1;
    }
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);

console.log(maxDepth(tree));