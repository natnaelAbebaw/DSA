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

function oddEvenList(head: ListNode | null): ListNode | null {
    let even = null;
    let odd = null;
    let startOddHead = null;
    let startEvenHead = null;
    let i = 1;
    while(head){
      if(i % 2 == 0){
        if(even){
          even.next = head;
          even = head;
        }else{
            even = head;
            startEvenHead = head;
        }
      }else{
        if(odd){
          odd.next = head;
          odd = head;
        }else{
            odd = head;
            startOddHead = head;
        }
      }
    const n = head.next;
    head.next = null;
    head = n;
    i++;
    }

    if(odd) odd.next = startEvenHead;
  
    return startOddHead;
};