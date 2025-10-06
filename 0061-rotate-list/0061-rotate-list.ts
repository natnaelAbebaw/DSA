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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    let node = head;
    let size = 0;
    while(node){
        size++
        node = node.next;
    }

    node = head;
    let counter = 0;
    let newHead = null;
    
    if(k % size == 0){
        return head;
    }

    while(node.next){
        counter++
        if(counter == size - k % size){
            const next  = node.next;
            node.next = null;
            node = next;
            newHead = next;
        }else{
            node = node.next;
        }
    }
    node.next = head;

    return newHead;
};