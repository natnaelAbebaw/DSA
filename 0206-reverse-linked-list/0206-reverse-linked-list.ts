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

function reverseList(head: ListNode | null): ListNode | null {
    if(head == null){
        return head;
    }
    let node = head;
    let prevNode = null;
    while(node.next){
        const nextNode = node.next;
        node.next = prevNode;
        prevNode = node;
        node = nextNode;
    }
    node.next = prevNode;
    return node;
};