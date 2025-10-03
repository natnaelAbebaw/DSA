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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  const set = new Set();

  while(headA || headB){
    if(headA && set.has(headA)){
        return headA
    }
    set.add(headA);
    if(headB && set.has(headB)){
        return headB
    }
    set.add(headB);
    headA = headA?.next;
    headB = headB?.next;
  }
};