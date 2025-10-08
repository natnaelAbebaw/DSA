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

function isValidBST(root: TreeNode | null): boolean {
    let flag = [];
    const valid = (node) => {
        if(!node.left && !node.right){
          return [node.val,node.val];
        }
        const [l1,r1] = node.left ? valid(node.left):[];
    
        r1 != undefined && r1 >= node.val && flag.push(0);
        const [l2,r2] = node.right ? valid(node.right):[];
        l2 != undefined && l2 <= node.val && flag.push(0);
       
        return [l1 || node.val , r2 || node.val];
    }
    valid(root);
    console.log(flag)
    return !Boolean(flag.length);
};