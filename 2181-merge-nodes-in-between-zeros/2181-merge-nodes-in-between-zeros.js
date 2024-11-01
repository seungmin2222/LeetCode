/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {
  const dummy = new ListNode(0); 
  let current = dummy;
  let sum = 0;

  head = head.next; 

  while (head) {
    if (head.val === 0) {
      if (sum > 0) {
        current.next = new ListNode(sum);
        current = current.next;
        sum = 0;
      }
    } else {
      sum += head.val;
    }
    head = head.next;
  }

  return dummy.next; 
};