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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
   const preorderA = []
   const inorderA = []

   function preOrder(node){
      if(!node){return}
      preorderA.push(node.val)
      preOrder(node.left)
      preOrder(node.right)
   }

   function inOrder(node){
    if(!node){return}
    inOrder(node.left)
    inorderA.push(node.val)
    inOrder(node.right)
   }

   preOrder(root);
   inOrder(root);

   return preorderA.join(",") + " " + inorderA.join(",")
};

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
   const [preorderStr, inorderStr] = data.split(" ");   
   const preorder = preorderStr? preorderStr.split(",") : []
   const inorder = inorderStr ? inorderStr.split(","): []

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
 
            const root = new TreeNode(Number(preorder[p]));
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


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */