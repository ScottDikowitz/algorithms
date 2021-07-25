const constructRowOrder = require("./constructRowOrder");
const printTree = require("./printTree");

function mirrorTree(root) {
    if (!root) return;
    const L = root.left;
    root.left = mirrorTree(root.right);
    root.right = mirrorTree(L);
    return root;
}

printTree(
mirrorTree(
constructRowOrder(
    [1,2,3,4,5,6,7]
)
)
)