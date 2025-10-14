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

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    function range(node){
        if(!node) return 0;
        if(node.val < low){
            return range(node.right); 
        }
        if(node.val > high){
           return range(node.left);
        }

        return range(node.left) + range(node.right) + node.val;
    }

    return range(root);
};