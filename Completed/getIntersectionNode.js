/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    var currentA = headA;
    var currentB = headB;

    while ( currentA !== currentB ) {
        if ( currentA !== null ) {
            currentA = currentA.next;
        }
        else {
            currentA = headB;
        }

        if ( currentB !== null ) {
            currentB = currentB.next;
        }
        else {
            currentB = headA;
        }
    }

    return currentA;
};

