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

function hasCycle(head: ListNode | null): boolean {
    const hashSet = new Set();
    let node = head;
    while(node){
        if(hashSet.has(node)){
            return true;
        }
        hashSet.add(node);
        node = node.next
    }
    return false;
};