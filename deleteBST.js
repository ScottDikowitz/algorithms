const buildBST = require('./buildBST');
const printTree = require('./printTree');

function deleteBST(root, key) {
    if (!root) return null;
    function handleDelete(n) {
        if (!n.left && !n.right) return null;
        if ((!n.left && n.right) || (n.left && !n.right)) {
            return n.left || n.right;
        }
        let p = n.right;
        while(p.left) {
            p = p.left;
        }
        p.left = n.left;

        return n.right;
    }
    if (key < root.val) {
        root.left = deleteBST(root.left, key);
    } else if (key > root.val) {
        root.right = deleteBST(root.right, key);
    } else {
        return handleDelete(root);
    }
    return root;
}
const root = buildBST([1,2,4,5,9,12,14,19]);
printTree(deleteBST(
    root, 1
))