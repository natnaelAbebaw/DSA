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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let size = 0;
    let node = head;
    while(node){
        size++
        node = node.next
    }

    let prev = null;
    node = head;
    let count = 1;
    while(node){
        if(count == size - n + 1){
            if(prev){
            prev.next = node.next
            return head;
            }
            else{
                return node.next
            }
        }
        count++
        prev = node;
        node = node.next
    }

    
};