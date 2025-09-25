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

function diameterOfBinaryTree(root: TreeNode | null): number {
    let max = 0;
    function diameter(node){
        if(!node){
            return -1;
        }
        const leftEdge = diameter(node.left) + 1;
        const rightEdge = diameter(node.right) + 1;
        max = Math.max(max,leftEdge + rightEdge )
        return Math.max(leftEdge,rightEdge);
    }
    diameter(root);
    return max;
};