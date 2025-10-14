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

class BSTIterator {
    public root: TreeNode;
    public nextVal:number;
    constructor(root: TreeNode | null) {
        this.root = root;
        this.nextVal = this.min(root);
    }

    min(node){
            if(!node.left) return node.val;
            return this.min(node.left);
    }

    next(): number {
        const I = this;
        function nextMin(node,p = null){
           if(node.val == I.nextVal){
             if(!node.right) return p
             return I.min(node.right);
           }
           return I.nextVal < node.val ? nextMin(node.left,node.val) : nextMin(node.right,p);
        }
        const val = this.nextVal; 
        this.nextVal = nextMin(this.root);
        return val;
    }

    hasNext(): boolean {
        return this.nextVal != null;
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */