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

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    
    function isTheSame(sub,t){
        if(!sub && !t) return true;
        if(sub?.val != t?.val) return false;
        return isTheSame(sub.left, t.left) && isTheSame(sub.right,t.right);
    }

    function isSub(node){
        if(!node) return false;
        if(node.val == subRoot.val){
            return isTheSame(subRoot,node);
        }

        return isSub(node.left) || isSub(node.right);
    }

    return isSub(root);
};