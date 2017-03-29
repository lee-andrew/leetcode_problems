/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var dummyNode = head;
    var currentNode = head;
    var i = 0;
    if ( currentNode.next === null && n >= 1) {
        return null;
    }

    while ( currentNode.next !== null ) {
        i = i + 1;
        if ( i > n ) {
            dummyNode = dummyNode.next;
        }
        currentNode = currentNode.next;
    }
    
    if ( dummyNode === head ) {
        return head.next;
    }
    dummyNode.next = dummyNode.next.next;
    
    return head;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var list = new ListNode(1);
list.next = new ListNode(2);

list = removeNthFromEnd(list,2);
var current = list;
while ( current !== null ) {
    console.log(current.val);
    current = current.next;
}



 