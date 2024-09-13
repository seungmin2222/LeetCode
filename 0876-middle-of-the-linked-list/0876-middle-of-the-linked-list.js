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
var middleNode = function(head) {
  const nodes = [];
  let current = head;
  
  while (current !== null) {
    nodes.push(current);
    current = current.next;
  }

  const middleIndex = Math.floor(nodes.length / 2);

  return nodes[middleIndex];
};