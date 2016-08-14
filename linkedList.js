'use strict';

var genUUID = require('./UUID.js');

class LinkedList {
    constructor(options){
        this.data = options.data;
        this.next = null;
        this.id = genUUID();
    }

    appendToTail(options){
        var node = new LinkedList(options);
        var n = this;
        while (n.next !== null){
            n = n.next;
        }
        n.next = node;

        return node;
    }
}

var parent = new LinkedList({data: 1});
for (var i = 0; i < 30; i++){
    parent.appendToTail({data: i});
}
function deleteNode(target){
    var node = parent;

    while (node.next !== null){
        if (node.next.data === target){
            node.next = node.next.next;
        }
        node = node.next;
    }
}

parent.appendToTail({data: 4});
parent.appendToTail({data: 5});
parent.appendToTail({data: 6});

// console.log(JSON.stringify(parent));

function removeDuplicates(input){
    var node = input || parent;

    var seen = {};
    seen[node.data] = true;
    while (node.next !== null){
        if (seen[node.next.data]){
            while (node.next !== null && seen[node.next.data]){
                node.next = node.next.next;
            }
        } else {
            seen[node.next.data] = true;
        }
        node = node.next;
        if (node === null){
            break;
        }
    }
}

function removeDuplicates2(input){
    var node = input || parent;

    var seen = {};
    var prevNode = null;
    while (node.next !== null){
        if (seen[node.data]){
            prevNode.next = node.next;
        } else {
            seen[node.data] = true;
            prevNode = node;
        }
        node = node.next;
    }
    if (node && seen[node.data]){
        prevNode.next = null;
    }
}
// console.log(JSON.stringify(parent));

// generate cyclic linkedlist
var cyclicParent = new LinkedList({data: 0});
var loopedNode;
for (var i = 1; i < 20; i++){
    if (i === 10){
        var loopedNode = cyclicParent.appendToTail({data: i});
    } else {
        cyclicParent.appendToTail({data: i});
    }

}

var last = cyclicParent.appendToTail({data: 20}).next = loopedNode;

function isCyclic(parent){
    var slow = parent;
    var fast = parent;

    while (fast && fast.next && fast.next.next !== null){
        slow = slow.next;
        fast = fast.next.next;

        if (slow.id == fast.id){
            return true;
        }
    }
    return false;
}

function findLoopStart(parent){
    var slow = parent;
    var fast = parent;

    while (fast && fast.next && fast.next.next !== null){
        slow = slow.next;
        fast = fast.next.next;

        if (slow.id == fast.id){
            slow = parent;
            while (slow.id !== fast.id){
                slow = slow.next;
                fast = fast.next;
            }
            break;
        }
    }
    return slow;
}
console.log(findLoopStart(cyclicParent));
