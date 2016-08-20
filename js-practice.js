'use strict';

var NodeObj = require('./nodeObj.js').NodeObj;
var Root = require('./nodeObj.js').Root;
var BSTRoot = require('./nodeObj.js').BSTRoot;

// obj merge - shallow
function mergeObj(obj1, obj2){
    if (typeof obj1 === 'undefined'){
        obj1 = {a: 'hello', b:'goodbye'};
    }
    if (typeof obj2 === 'undefined'){
        obj2 = {c: 'howdy', d: 'world'};
    }
    var obj3 = {};
    Object.keys(obj1).forEach(function(item){
        obj3[item] = obj1[item];
    });

    Object.keys(obj2).forEach(function(item){
        obj3[item] = obj2[item];
    });

    return obj3;
}

// array.flatten
// [0, 14, 9, 3, 4, [1, 4, 5], 0];
Array.prototype.flatten = function(){

    var result = [];

    this.forEach(function(el){
        if (Array.isArray(el)){
            result = result.concat(el.flatten());
        } else {
            result = result.concat([el]);
        }
    });
    return result;
};
// obj deep-dup

// {1: '2'}
var deepDup = function(obj){
    var copy = {};

    Object.keys(obj).forEach(function(key){
        if (typeof obj[key] === 'object'){
            copy[key] = deepDup(obj[key]);
        } else {
            copy[key] = obj[key];
        }

    });

    return copy;
};

var obj = {a: {b: 'c', h: {i: 'j'}}, b: 'e'};

var obj2 = deepDup(obj);
// merge-sort
Array.prototype.mergeSort = function(merge){
    if (this.length <= 1){
        return this;
    }

    if (typeof merge === 'undefined'){
        merge = function(left, right){
            var result = [];
            while (left.length > 0 && right.length > 0){
                if (left[0] < right[0]){
                    result.push(left.shift());
                } else {
                    result.push(right.shift());
                }
            }
            return result.concat(left).concat(right);
        };
    }

    var half = this.length / 2;

    var leftHalf = this.slice(0, half);
    var rightHalf = this.slice(half);

    var leftSorted = leftHalf.mergeSort(merge);
    var rightSorted = rightHalf.mergeSort(merge);


    return merge(leftSorted, rightSorted);
};


// Quicksort
Array.prototype.quickSort = function(comparator){
    if (this.length < 2){
        return this;
    }

    var randomIndex = Math.floor(Math.random() * this.length);
    var pivot = this[randomIndex];
    var left = [];
    var right = [];
    if (typeof comparator === 'undefined'){
        comparator = function(a, p){
            return a < p;
        };
    }

    this.forEach(function(el, i){
        if (i !== randomIndex){
            if (comparator(el, pivot)){
                left.push(el);
            } else {
                right.push(el);
            }
        }
    });

    return left.quickSort(comparator).concat(pivot).concat(right.quickSort(comparator));

};

// Bubblesort
function bubblesort(arr){
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr.length - 1 - i; j++){
            arr[j] = arr[j] > arr[j + 1] ? [arr[j+1], arr[j+1] = arr[j]][0] : arr[j];
        }
    }

    return arr;
}

// binary search - Bsearch
function binarySearch(arr, target){
    if (arr.length === 0){
        return null;
    }
    var mid = Math.floor(arr.length / 2);

    if (arr[mid] === target){
        return mid;
    } else if (target < arr[mid]) {
        return binarySearch(arr.slice(0, mid), target);
    } else {
        var rec = binarySearch(arr.slice(mid + 1), target);
        if (rec === null){
            return null;
        }
        return mid + rec + 1;
    }

}

// DFS - Depth First Search
function dfs(target, node){
    if (typeof node === 'undefined'){
        node = Root;
    }
    if (node.value === target){
        return true;
    } else if (node.children.length === 0){
        return false;
    }

    for (var i = 0; i < node.children.length; i++){
        if (dfs(target, node.children[i])){
            return true;
        }
    }

    return false;
}
// BFS - Breadth First Search
function bfs(target, node){
    if (typeof node === 'undefined'){
        node = Root;
    }

    var stack = [Root];
    var current;

    var pushToStack = function(child){
        stack.push(child);
    };

    while (stack.length > 0){
        current = stack.shift();
        if (current.value === target){
            return true;
        }
        current.children.forEach(pushToStack);
    }
    return false;
}

function isBst(node){
    if (typeof node === 'undefined'){
        node = BSTRoot;
    } else if (node === null){
        return true;
    }
    if (!(node.left || node.right)){
        return true;
    }
    // check if left and right exist
    if (node.left && node.left.value > node.value){
        return false;
    }

    if (node.right && node.right.value < node.value){
        return false;
    }

    // check if current nodes is between left and/or right
    if (!isBst(node.left) || !isBst(node.right)){
        return false;
    }

    return true;
}

function sumBst(lvl, node){
    if (typeof node === 'undefined'){
        node = BSTRoot;
    }
    if (typeof lvl === 'undefined'){
        lvl = 1;
    }
    var i = 0;
    var stack = [node];
    var sum = 0;
    while (stack.length !== 0 || i > lvl){
        var current = stack.pop();

        if (lvl === i){
            if (current.left) sum += current.left.value;
            if (current.right) sum += current.right.value;
            break;
        }

        if (current.left) stack.push(current.left);
        if (current.right) stack.push(current.right);
        i += 1;
    }

    return sum;
}

function addToNine(arr){
    var numHash = {};
    arr.forEach(function(num){
        numHash[num] = true;
    });

    for (var i = 0; i < arr.length; i++){
        var curNum = arr[i];
        var diff = 9 - curNum;
        if (numHash[diff]){
            return [curNum, diff];
        }
    }
    return false;
}
// console.log(addToNine([5, 2, 1, 4, 15, 4, 8]));

module.exports = {
    merge: mergeObj,
    deepDup: deepDup,
    bubbleSort: bubblesort,
    binarySearch: binarySearch,
    dfs: dfs,
    bfs: bfs,
    isBst: isBst,
    sumBst: sumBst
};
