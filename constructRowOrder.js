const Tree = require('./tree');
const printTree = require('./printTree');

function constructRowOrder(arr) {
    if (arr.length === 0) return null;
    const nodes = Array(arr.length).fill(null);
    let i = 0; // slow
    let j = 1; // fast
    while(i < arr.length) {
        if (arr[i] == null) {
            i++;
            // j+=2;
            continue;
        }
        if (nodes[i] == null) nodes[i] = new Tree(arr[i]);
        const node = nodes[i];
        if (arr[j] == null) {
            // j++;
        } else {
            const left = new Tree(arr[j]);
            nodes[j] = left;
            node.left = left;
        }
        j++;
        if (arr[j] == null) {
            // j++;
        } else {
            const right = new Tree(arr[j]);
            nodes[j] = right;
            node.right = right;
        }
        j++;
        i++;
    }
    return nodes[0]
}

// printTree(constructRowOrder([2,7,5,2,6,null,9,null,null,5,11,4,null]));

module.exports = constructRowOrder;