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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {

    function successor(node){
        let next = node.right;
        while(next.left){next = next.left}
        return next;
    }

    function predecessor(node){
        let prev = node.left;
        while(prev.right){prev = prev.right}
        return prev;
    }

    function deleteN(node,k){
        if(!node) return null;
      
        if(k > node.val){
         node.right = deleteN(node.right,k);
        }
        else if(k < node.val ){
        node.left = deleteN(node.left,k);
        }
        else{
            if(!node.left && !node.right){
                node = null;
            }
            else if(node.right){
               let su = successor(node);
               node.val = su.val;
               node.right = deleteN(node.right,node.val);
            }
            else{
               let pre = predecessor(node);
               node.val = pre.val;
               node.left = deleteN(node.left,node.val);
            }
        }
    
        return node;
     }


    return deleteN(root,key);
};
