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

function sortedArrayToBST(nums: number[]): TreeNode | null {
    const mi = Math.ceil(nums.length/2) - 1;

    function bst(l,r){
        if(l == r){
           return new TreeNode(nums[l])
        }

        const mid = l + Math.ceil((r-l)/2);
        const node = new TreeNode(nums[mid]);
        if(mid > l) node.left = bst(l, mid-1);
        if(mid < r) node.right = bst(mid+1,r);

        return node;
    }

    return bst(0,nums.length-1);
};