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

function isBalanced(root: TreeNode | null): boolean {
    let casee = 0;

    function balance(node){
      if(!node) return 1;
      const d1 = balance(node.left) + 1;
      const d2 = balance(node.right) + 1;

      if(Math.abs(d1 - d2) > 1) {
        casee++
      }

      return Math.max(d1,d2);
    }

    balance(root)

    return !Boolean(casee);
};