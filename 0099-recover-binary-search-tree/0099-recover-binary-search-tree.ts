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

/**
 Do not return anything, modify root in-place instead.
 */
function recoverTree(root: TreeNode | null): void {
    const swaps = []
    function checkBst(node,lb = new TreeNode(-Infinity),hb =  new TreeNode(Infinity)){
      if(!node) return;

      if(node.val < lb.val) {
         swaps.push([node,lb])
      }

      if(node.val > hb.val) {
         swaps.push([node,hb])
      }

      checkBst(node.left,lb,node)
      checkBst(node.right,node,hb)
    }
    checkBst(root);
    if(swaps.length == 2){
        const set = new Set(swaps[0])
        const x = swaps[1].findIndex(a=>set.has(a));
        const y = swaps[0].findIndex(a=> a == swaps[1][x]);
        const val = swaps[0][1-y].val;
        swaps[0][1-y].val = swaps[1][1-x].val;
        swaps[1][1-x].val = val;
    }
    else{
        const val = swaps[0][0].val;
        swaps[0][0].val = swaps[0][1].val;
        swaps[0][1].val = val;
    }

};