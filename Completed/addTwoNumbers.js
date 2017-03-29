/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if ( l1.listLength() < l2.listLength() ) {
        return addTwoNumbers(l2, l1);
    }
    var carry = 0;
    var current1 = l1;
    var current2 = l2;
    var n;
    var list = new ListNode;
    
    while ( current1 ) {
        if ( current2 === null) {
            n = current1.val + carry;
        }
        else {
            n = current1.val + current2.val + carry;
        }

        carry = 0;
        if ( n > 9 ) {
            list.add(n - 10);
            carry = carry + 1;
        }
        else {
            list.add(n);
        }

        if ( current2 === null ) {
            current1 = current1.next;
        }
        else {
            current1 = current1.next;
            current2 = current2.next;
        }
    }
    if ( carry === 1) {
        list.add(1);
    }

    return list;
};

function ListNode(val) {
      this.val = val;
      this.next = null;
 }


ListNode.prototype.add = function(value) {
    var node = new ListNode(value),
    currentNode = this;

    if (currentNode.val == null) {
        this.val = value;
    }
    else {
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
    
        currentNode.next = node;
    }
};

ListNode.prototype.listLength = function() {
    var counter = 0;
    currentNode = this;
    while (currentNode !== null) {
            counter = counter + 1;
            currentNode = currentNode.next;
    }
    return counter;
};

var list1 = new ListNode();
list1.add(2);
list1.add(4);
list1.add(3);

var list2 = new ListNode();
list2.add(5);
list2.add(6);
list2.add(4);

console.log(addTwoNumbers(list1, list2));