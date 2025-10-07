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

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    let found = [];
    if(!root) return [];
    function sum(node, target,path=[node.val]){
        if(!node.left && !node.right){
            if(node.val == target) {
                found.push(path)
            }
            return
        }
        if(node.left) sum(node.left, target - node.val, [...path,node.left.val])
        if(node.right) sum(node.right, target - node.val,[...path,node.right.val])
    }

    sum(root,targetSum);
    return found;
};