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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
      const queue = [root];
    let head = 0;
    const levelNodes = [];
    let head2 = 0;
    let n = 0
    const asn = []
    
    if(!root) return [];

    while(head < queue.length){
        for(let i = 0;i < 2**n;i++){
           const node = queue[head];
           if(node) {
            levelNodes.push(node)
            head++
           }
        }
      
        const vals = levelNodes.map(n=>n.val).slice(head2);
        asn.push(n%2 == 0 ? vals : vals.reverse())
        
        while(head2 < levelNodes.length){
            const node = levelNodes[head2++];
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        n++
    }
 
    return asn;
};