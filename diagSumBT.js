const constructRowOrder = require("./constructRowOrder");

function diagSumBT(root) {
    const sums = [];
    function helper(node,l) {
        if (node == null) return;
        helper(node.left, l+1);
        if (sums[l] == null) sums[l] = 0;
        sums[l] += node.val;
        helper(node.right, l);
        return node;
    }
    helper(root,0);

    // return root;
    return sums;
}

console.log(
    diagSumBT(
        constructRowOrder(
            [1,2,3,4,null,5,6,null,null,7,8,null,null]
        )
    )
);