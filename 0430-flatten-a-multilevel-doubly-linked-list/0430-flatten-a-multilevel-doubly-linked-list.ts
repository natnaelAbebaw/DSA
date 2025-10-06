/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     prev: _Node | null
 *     next: _Node | null
 *     child: _Node | null
 *     
 *     constructor(val?: number, prev? : _Node, next? : _Node, child? : _Node) {
 *         this.val = (val===undefined ? 0 : val);
 *         this.prev = (prev===undefined ? null : prev);
 *         this.next = (next===undefined ? null : next);
 *         this.child = (child===undefined ? null : child);
 *     }
 * }
 */


function flatten(head: _Node | null): _Node | null {
  function flat(node){
    if(!node.next && !node.child) return node;
    if(node.child && node.next){
        const lastNode = flat(node.child);
        const last = node.next;
        node.next = node.child;
        node.child.prev = node;
        node.child = null;
        lastNode.next = last;
        last.prev = lastNode;
    }

    if(node.child && !node.next){
        const lastNode = flat(node.child);
        node.next = node.child;
        node.child.prev = node;
        node.child = null;
        return lastNode;
    }
    
    if(node.next) return flat(node.next);
  }
 
  if(head) flat(head);

  return head;
};