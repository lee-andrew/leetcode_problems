/**
 * initialize your data structure here.
 */
var MinStack = function() {
    stack = [];
    min = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if ( min.length === 0 || min[min.length - 1] <= x) {
        min.push(x);
    }
    else {
        for ( var i = 0; i < min.length; i++ ) {
            if ( x <= min[i] ) {
                min.splice(i, 0, x);
                break;
            }
            if ( i === min.length - 1 ) {
                min.push(x);
            }
        }
    }

    stack.push(x);
};
/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    var i = min.indexOf( stack[stack.length - 1] );
    min.splice(i, 1);
    stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return stack[stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if (min.length !== 0) {
        return min[0];
    }
    else {
        return;
    }
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());   //--> Returns -3.
minStack.pop();
console.log(minStack.top());      //--> Returns 0.
console.log(minStack.getMin());   //--> Returns -2.