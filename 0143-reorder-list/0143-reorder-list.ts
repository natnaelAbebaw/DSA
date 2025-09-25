/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    let size = 0;
    const map = new Map();
    let node = head;
    while(node){
        size++
        const nextNode = node.next;
        node.next = null;
        map.set(size,node)
        node = nextNode;
    }

    node = head;
    let count = 1;

    while(node){
        const nextNode = map.get(count + 1) || null;
        const nextNextNode =  map.get(count + 2) || null;
        const insertedNode =  map.get(size-count + 1)
        node.next = insertedNode;
        if(nextNode == insertedNode){
            insertedNode.next = null;
            return;
        }else if( nextNextNode == insertedNode ){
              insertedNode.next = nextNode;
              return;
        }else{
            insertedNode.next = nextNode;
        }
        node = nextNode;
        count++
    }
};