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

function maxDepth(root: TreeNode | null): number {
    if(!root){return 0}
   let max = 0;
   function postOrder(node, level = 1){
    if(!node.left && !node.right){
        return  level;
    }
    const levelLeft = node.left ? postOrder(node.left , level + 1) : level;
    const levelRight = node.right ? postOrder(node.right, level + 1) : level;
   
    return Math.max(levelLeft,levelRight);
   }

   return postOrder(root,1);
};