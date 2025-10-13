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

function kthSmallest(root: TreeNode | null, k: number): number {
    const mapNless = {}
    function getSize(node,n=0){
        if(!node) return -1;
        const left = getSize(node.left,n) + 1;
        mapNless[node.val] = left + n;
        const right = getSize(node.right,n + left + 1) + 1;
        return left + right;
    }

   const size = getSize(root) + 1;
   function getK(node){
    if(!node) return
    if(mapNless[node.val] + 1 == k){
        return node.val
    }
    return  getK(node.left) ?? getK(node.right)
   }
    return getK(root);
};