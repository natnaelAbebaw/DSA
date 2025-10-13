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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    function build(p,i,l){
            if(p >= preorder.length){
                return null;
            }

            let index = -1;
            for(let j = i;j <= l;j++){
                if(inorder[j] == preorder[p]){
                    index = j;
                    break;
                }
            }
            if(index == -1){
               return build(p+1,i,l);
            }
 
            const root = new TreeNode(preorder[p]);
            let x = p;
             if(i <= index-1){
               root.left =  build(x + 1 ,i,index-1);
               x++;
               } else {
                root.left = null;
               };
            
              if(index+1 <= l){
                root.right =   build(x+1,index+1,l) ;
               } else {
                root.right = null;
               };
               
            return root;
    }

    return build(0,0,inorder.length-1)
};