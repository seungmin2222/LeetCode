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
var reverseList = function(head) {
  if(head === null || head.next === null) return head;
  
    let list = head.next;
    let nextNum = list.next;
  
    head.next = null;
  
    while(list) {
      list.next = head;
      head = list;
      list = nextNum;
      if(!nextNum) break;
      nextNum = nextNum.next;
      
    }
  
    return head;
};