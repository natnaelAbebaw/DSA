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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let r = 0;
    let prev = null;
    let node = l1;
    while(node || l2){
        const val1 = node?.val || 0;
        const val2 = l2?.val || 0;
        if(node){
        node.val = (val1 + val2 + r) % 10;
        }else{
          node = new ListNode(Math.floor((val1 + val2 + r) % 10));
          prev.next = node;
        }
        r = Math.floor((val1 + val2 + r) / 10);
        prev = node;
        node = node?.next || null;
        l2 = l2?.next || null;
    }
    if(r){
        prev.next = new ListNode(r);
    }

    return l1;
};