/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     next: _Node | null
 *     random: _Node | null
 * 
 *     constructor(val?: number, next?: _Node, random?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */


function copyRandomList(head: _Node | null): _Node | null {
    if(!head){
        return null;
    }
    const nodeMap = new Map();
    const newHead = new _Node(head.val);
    nodeMap.set(head,newHead);
    if(head.next ){
      newHead.next = nodeMap.has(head.next) ? nodeMap.get(head.next) : new _Node(head.next.val);
      nodeMap.set(head.next,newHead.next);
    }
    if(head.random){
    newHead.random =  nodeMap.has(head.random) ? nodeMap.get(head.random) : new _Node(head.random.val);
    nodeMap.set(head.random,newHead.random);
    }
    head = head.next;
    while(head){
        const newNode = nodeMap.has(head) ? nodeMap.get(head) : new _Node(head.val);
        nodeMap.set(head,newNode);
        if(head.next){
        newNode.next = nodeMap.has(head.next) ? nodeMap.get(head.next) : new _Node(head.next.val);
        nodeMap.set(head.next, newNode.next);
        }
        if(head.random){
        newNode.random = nodeMap.has(head.random) ? nodeMap.get(head.random) : new _Node(head.random.val)
        nodeMap.set(head.random, newNode.random);}
        head = head.next;
    }
    return newHead;
};