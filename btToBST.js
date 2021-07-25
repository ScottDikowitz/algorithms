// Given a Binary Tree, convert it to a Binary Search Tree. The conversion must be done in such a way that keeps the original structure of Binary Tree.
const printTree = require('./printTree');
const constructRowOrder = require('./constructRowOrder');
function btToBST(root) {
    const allVals = [];
    function getAllVals(node) {
        if (!node) return;
        getAllVals(node.left);
        allVals.push(node.val);
        getAllVals(node.right);
    }
    getAllVals(root);
    allVals.sort((a,b) => a - b);
    let i = 0;
    function helper(node) {
        if (!node) return;
        helper(node.left);
        node.val = allVals[i++];
        helper(node.right);
        return node;
    }
    return helper(root);
}

printTree(
    btToBST(
        constructRowOrder([10,2,7,8,4])
    )
)