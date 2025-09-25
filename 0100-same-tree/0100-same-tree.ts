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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {

    function isSame(n1,n2){
        if(n1==null && n2 == null){
            return true;
        }
        if(n1?.val !== n2?.val){
            return false;
        }
        if(!n1.left && !n1.right && !n2.left && !n2.right){
            return true;
        }
        return  isSame(n1.left,n2.left) && isSame(n1.right,n2.right);
    }

    return isSame(p,q);
};