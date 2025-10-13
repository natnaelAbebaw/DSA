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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    const mapI = {}
    for(let j = 0;j< inorder.length;j++){
        mapI[inorder[j]] = j;
    }

    function build(p,i,l){
        const index = mapI[postorder[p]];
        if(p < 0){
            return null;
        }

        if(index > l){
            return build(p - 1,i,l)
        }

        const root = new TreeNode(postorder[p]);

        if( index+1 <= l){
            root.right = build(p-1, index+1, l);
            p--
        }else{
            root.right = null;
        }

        if(i <= index-1){
            root.left = build(p-1, i, index-1);
        }else{
            root.left = null;
        }

        
       return root;
    }

    return  build(postorder.length-1,0,postorder.length-1);
};