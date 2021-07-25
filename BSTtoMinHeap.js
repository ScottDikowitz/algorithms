const buildBST = require('./buildBST');
const printTree = require('./printTree');
const Queue = require('./queue');
const Tree = require('./tree');

function BSTtoMinHeap(root) {
    const sorted = [];
    function BSTToArray (node) {
        if (!node) return;
        BSTToArray(node.left);
        sorted.push(node.val);
        BSTToArray(node.right);
    }
    BSTToArray(root);
    // maintain old structure
    // const q = new Queue([root]);
    // let i = 0;
    // while(q.size() > 0) {
    //     const node = q.dequeue();
    //     node.val = sorted[i++];
    //     node.left && q.enqueue(node.left);
    //     node.right && q.enqueue(node.right);
    // }
    let i = 0;
    const q = new Queue([new Tree(sorted[i++])]);
    const head = q.front();
    while(i < sorted.length) {
        const node = q.dequeue();
        node.left = new Tree(sorted[i++]);
        q.enqueue(node.left);
        if (i < sorted.length) {
            node.right = new Tree(sorted[i++]);
            q.enqueue(node.right);
        }
    }
    return head;
}

printTree(
    BSTtoMinHeap(
        buildBST(
            [1,2,4,8,9,12,14,18]
        )
    )
)