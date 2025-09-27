/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxPathSum(root: TreeNode | null): number {
      let max = -Infinity;
    function maxPath(node){
        if(!node){
            return 0;
        }
        const leftVal = maxPath(node.left);
        const rightVal = maxPath(node.right);
        max = Math.max(max,Math.max(leftVal,rightVal) + node.val ,leftVal + rightVal +node.val ,node.val);
        console.log(max,leftVal,rightVal, node.val);
        return Math.max(Math.max(leftVal,rightVal) + node.val,node.val );
    }

    maxPath(root);
    return max;
};