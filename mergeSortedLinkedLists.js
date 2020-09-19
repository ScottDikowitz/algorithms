// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
//
// Example:
//
// Input:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// Output: 1->1->2->3->4->4->5->6


function Node (val) {
    this.val = val;
    this.next = null;
}

function createNodes(arr = []) {
    const result = [];
    let pointer = null;
    arr.forEach((val, i) => {
        const node = new Node(val);
        if (result[result.length - 1]) {
            result[result.length - 1].next = node;
        }
        result.push(node);
    });
    return result[0];
}

function createNodeLists(lists = [[]]) {
    return lists.map(list => createNodes(list));
}


function flatten(arr, res = []) {
    arr.forEach( el => {
        if (Array.isArray(el)) {
            flatten(el, res)
        } else {
            res.push(el)
        }
    })
    return res;
}

function merge (left, right) {
    const arr = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0].val <= right[0].val) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    return arr.concat(left).concat(right)
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);
    const mergeSortLeft = mergeSort(leftHalf);
    const mergeSortRight = mergeSort(rightHalf);


    return merge(mergeSortLeft, mergeSortRight);
}

function toArray(lists) {
    return lists.map(listNode => {
        const res = [];
        let node = listNode;
        while (node) {
            res.push(node);
            node = node.next;
        }
        return res;
    })
}

function mergeSortedLinkedLists(lists) {
    const sortedList = mergeSort(flatten(toArray(lists)));
    let prev = null;
    sortedList.forEach(node => {
        node.next = null;
        if (prev) {
            prev.next = node;
        }
        prev = node;
    })
    return sortedList[0];
}
const nodes = createNodeLists([[1,4,5], [1,3,4], [2,6], [55, 102, 12, 44], [99, 87]]);
// console.log(mergeSortedLinkedLists(nodes))


function mergeKLists(lists = []) {
    let last = null
    lists
        .reduce((a, list) => {
            while (list) {
                a.push(list)
                list = list.next
            }
            return a
        }, [])
        .sort((a, b) => b.val - a.val)
        .forEach(v => {
            v.next = last
            last = v
        })
    return last
}

console.log(mergeKLists(nodes))
