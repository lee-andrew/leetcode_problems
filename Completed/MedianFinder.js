/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    maxHeap = [];
    minHeap = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (maxHeap.length === 0) {                                 // if empty, push to max
        maxHeap.push(num);
    }
    else if (minHeap.length === 0) {
        if (num < maxHeap[0]) {
            minHeap.push(maxHeap[0]);
            maxHeap[0] = num;
        }
        else {
            minHeap.push(num);
        }
    }
    else {
        if (num <= minHeap[0]) {
            if (num === maxHeap[0] && (maxHeap.length + minHeap.length) % 2 === 1) {
                insertNode(minHeap, num, false);
            }
            else if (num < maxHeap[0] && (maxHeap.length + minHeap.length) % 2 === 1) {
                insertNode(minHeap, maxHeap[0], false);
                removeNode(maxHeap, maxHeap[0], true);
                insertNode(maxHeap, num, true);
            }
            else if (num > maxHeap[0] && (maxHeap.length + minHeap.length) % 2 === 1) {
                insertNode(minHeap, num, false);
            }
            else {
                insertNode(maxHeap, num, true);
            }
        }
        else {
            if ((maxHeap.length + minHeap.length) % 2 === 0) {
                insertNode(maxHeap, minHeap[0], true);
                removeNode(minHeap, minHeap[0], false);
                insertNode(minHeap, num, false);
            }
            else {
                insertNode(minHeap, num, false);
            }
            
        }
        
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if ((maxHeap.length + minHeap.length) % 2 === 1) {
        return maxHeap[0];
    }
    else {
        if(maxHeap.length > 0 && minHeap.length > 0){
            return (maxHeap[0] + minHeap[0]) / 2;
        }
        return;
    }
};

var parentIndex = function(i) {
    return Math.floor((i - 1) / 2);
};

var leftChildIndex = function(heap, i) {
    var left = 2 * i + 1;
    if (left < heap.length) {
        return left;
    }
    return -1;
};

var rightChildIndex = function(heap, i) {
    var right = 2 * i + 2;
    if (right < heap.length) {
        return right;
    }
    return -1;
};

var insertNode = function(heap, num, max) {
    heap.push(num);

    for (var i = heap.length - 1; i > 0; i = Math.floor((i - 1) / 2)) {
        if (max) {
            if (heap[i] > heap[parentIndex(i)]) {
                heap.swap(i, parentIndex(i));
            }
            else {
                break;
            }
        }
        else {
            if (heap[i] < heap[parentIndex(i)]) {
                heap.swap(i, parentIndex(i));
            }
            else {
                break;
            }
        }
    }
};

var removeNode = function(heap, num, max) {
    var index = heap.indexOf(num);
    if (index === -1) {
        return;
    } 
    if (heap.length === 1) {
        heap.pop();
        return;
    }

    heap.swap(heap.length - 1, index);
    heap.pop();
    
    var i = index;
    while(leftChildIndex(heap, i) !== -1) {
        if (rightChildIndex(heap, i) !== -1) {
            if (max) {                                                                  // for max heaps
                if (heap[leftChildIndex(heap, i)] >= heap[rightChildIndex(heap, i)]) {  // compare left and right children
                    if (heap[i] < heap[leftChildIndex(heap, i)]) {                      // swap if parent is smaller than the left child
                        heap.swap(leftChildIndex(heap, i), i);              
                        i = leftChildIndex(heap, i);
                    }
                    else {                                                              // parent is bigger than the left child
                        break;
                    }
                }
                else {
                    if (heap[i] < heap[rightChildIndex(heap, i)]) {                     // swap if parent is smaller than the right child
                        heap.swap(rightChildIndex(heap, i), i);
                        i = rightChildIndex(heap, i);             
                    }
                    else {                                                              // parent is bigger than the right child
                        break;
                    }
                }
            }
            else {
                 if (heap[leftChildIndex(heap, i)] <= heap[rightChildIndex(heap, i)]) {  // compare left and right children
                    if (heap[i] > heap[leftChildIndex(heap, i)]) {                      // swap if parent is bigger than the left child
                        heap.swap(leftChildIndex(heap, i), i); 
                        i = leftChildIndex(heap, i);             
                    }
                    else {                                                              // parent is smaller than the left child
                        break;
                    }
                }
                else {
                    if (heap[i] > heap[rightChildIndex(heap, i)]) {                     // swap if parent is bigger than the right child
                        heap.swap(rightChildIndex(heap, i), i);      
                        i = rightChildIndex(heap, i);       
                    }
                    else {                                                              // parent is smaller than the right child
                        break;
                    }
                }
            }
        }
        else if (rightChildIndex(heap, i) === -1) {        
            if (max) {
                if (heap[i] < heap[leftChildIndex(heap, i)]) {                     
                    heap.swap(leftChildIndex(heap, i), i);      
                    i = leftChildIndex(heap, i);        
                }
                else {                                                              
                    break;
                }
            }
            else {
                if (heap[i] > heap[leftChildIndex(heap, i)]) {                    
                    heap.swap(leftChildIndex(heap, i), i);       
                    i = leftChildIndex(heap, i);          
                }
                else {                                                              
                    break;
                }
            }
        }
    }
};

Array.prototype.swap = function (i, j) {
  var tmp = this[i];
  this[i] = this[j];
  this[j] = tmp;
  return this;
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = Object.create(MedianFinder).createNew()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */