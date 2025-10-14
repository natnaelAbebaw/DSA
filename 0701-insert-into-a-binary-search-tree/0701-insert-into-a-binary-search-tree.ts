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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
    if(!root){
        return new TreeNode(val);
    }

    function insert(node){
        if(!node) return;
        if(val < node.val){
            if(!node.left) {node.left = new TreeNode(val);return}
            else{insert(node.left)}
        }else{
            if(!node.right) {node.right = new TreeNode(val);return}
            else{insert(node.right)}
        }
    }

    insert(root);
    return root;
};