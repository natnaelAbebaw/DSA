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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let prev = null;
    let minNode = null;
    while (list1 && list2){
       if(list1.val < list2.val){
         if(prev){
            prev.next = list1
            prev = prev.next
            }
         else{
            prev = list1
            minNode = prev;
            }
         list1 = list1.next;  
       }else{
        if(prev){prev.next = list2
          prev = prev.next
        }

        else{prev = list2
           minNode = prev;
        }
        list2 = list2.next;
        
       }
    }

    if(!list1 && list2){
        if(prev){
        prev.next = list2;
        }else{
            minNode = list2;
        }
    }else if(list1 && (!list2)){
        if(prev){
         prev.next =list1;
        }else{
            minNode = list1;
        }
    }

   return minNode;
};