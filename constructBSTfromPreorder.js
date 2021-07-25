const Tree = require('./tree');
const printTree = require('./printTree');

function constructBST(A) {
    let i = 1;
    const root = new Tree(A[0]);
    function helper(node, min, max) {
        if (!node) return;

        if (A[i] < node.val && A[i] > min) {
            const LN = new Tree(A[i++]);
            node.left = LN;
            helper(node.left, min, node.val)
        }
        if (A[i] > node.val && A[i] < max) {
            const RN = new Tree(A[i++]);
            node.right = RN;
            helper(node.right, node.val, max)
        }

        return node;
    }
    return helper(root, -Infinity, Infinity);
}

// printTree(constructBST([10, 5, 1, 7, 40, 50]));
printTree(constructBST([7, 5,3,1,4,6,12,9,8,10,15,13,17]));