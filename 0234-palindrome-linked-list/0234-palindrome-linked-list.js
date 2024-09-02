/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let values = [];
  
  let current = head;
  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }
  
  let i = 0;
  let j = values.length - 1;
  
  while (i < j) {
    if (values[i] !== values[j]) {
      return false;
    }
    i++
    j--
  }
  
  return true;
};
