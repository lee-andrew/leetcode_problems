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
    if ( l1.length < l2.length) {
        addTwoNumbers(l2, l1);
    }

    var carry = 0;
    var current1 = l1.head;
    var current2 = l2.head;
    var list = new LinkedList();
    while ( current1 ) {
        if ( !current2 ) {
            var n = current1.val + carry;
        }
        else {
            var n = current1.val + current2.val + carry;
        }
        carry = 0;
        if ( n > 9 ) {
            list.add(n - 10);
            carry = 1;
        }
        else {
            list.add(n);
        }
        if ( current1.next === null && carry === 1) {
            list.add(1);
        }
        
        if ( !current2 ) {
            current1 = current1.next;
        }
        else {
            current1 = current1.next;
            current2 = current2.next;
        }
    }
    return list;
};

function ListNode(val) {
      this.val = val;
      this.next = null;
 }

function LinkedList() {
    this.length = 0;
    this.head = null;
}

LinkedList.prototype.add = function(value) {
    var node = new ListNode(value),
    currentNode = this.head;
 
    // 1st use-case: an empty list 
    if (!currentNode) {
        this.head = node;
        this.length++;
        return node;
    }
 
    // 2nd use-case: a non-empty list
    while (currentNode.next) {
        currentNode = currentNode.next;
    }
 
    currentNode.next = node;
     
    this.length++;

    return node;
};

var list1 = new LinkedList();
list1.add(2);
list1.add(4);
list1.add(3);

var list2 = new LinkedList();
list2.add(5);
list2.add(6);
list2.add(4);

console.log(addTwoNumbers(list1, list2).head);