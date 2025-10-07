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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    let found = 0;
    if(!root) return false;
    function sum(node, target){
        if(!node.left && !node.right){
            if(node.val == target) found++
            return
        }
        if(node.left) sum(node.left, target - node.val)
        if(node.right) sum(node.right, target - node.val)
    }

    sum(root,targetSum);
    return Boolean(found)
};