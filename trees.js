/**
 * Definition for a binary tree node.
*/
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }


/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
serialize = function(root) {
    function helper (node, arr=[]) {
        if (!node) {
            arr.push('null');
            return arr;
        }
        arr.push(node.val);
        helper(node.left, arr);
        helper(node.right, arr);
        return arr;
    }
    return `[${helper(root).join(',')}]`;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
deserialize = function(data) {
    let arr = JSON.parse(data);
    let head = null;
    if (arr[0] != null) {
        head = new TreeNode(arr.shift());
    }
    function dfs(node) {
        if (!node) return null;
        let top = arr.shift();
        if (top != null) {
            node.left = new TreeNode(top);
            dfs(node.left);
        }
        top = arr.shift();
        if (top != null) {
            node.right = new TreeNode(top);
            dfs(node.right);
        }
        return node;
    }
    return dfs(head);
};

function find(root, target) {
    if (!root || !target) return null;
    if (root.val.toString() == target.toString()) return root;
    const left = find(root.left, target);
    if (left) return left;
    const right = find(root.right, target);
    if (right) return right;
}

module.exports = {
    serialize,
    deserialize,
    TreeNode,
    find
};

function preorder(node) {
    if (!node) return null;
    preorder(node.left);
    preorder(node.right);
}

let tree = deserialize('[1,2,null,null,3,4,55,null,null,21,null,null,5,null,15,null,null]');
preorder(tree);

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
