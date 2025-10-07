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

function isSymmetric(root: TreeNode | null): boolean {

   function symmetry(node1, node2){
    if(!node1 && !node2) return true;
 
    if(node1?.val !== node2?.val)return false;
    
    return symmetry(node1.left,node2.right) && symmetry(node1.right,node2.left);
}

   return symmetry(root.left,root.right);
};