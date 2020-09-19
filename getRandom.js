function TreeNode (val) {
    this.left = null;
    this.right = null;
    this.val = val;
    this.size = 1;
}

// TreeNode.prototype.getRandom = function () {
//     arr = [];
//     function helper (node) {
//         if (!node) return;
//         arr.push(node);
//         helper(node.left);
//         helper(node.right);
//     }
//     helper(this);
//     return arr[Math.floor(Math.random() * arr.length)];
// }

TreeNode.prototype.getRandom = function () {
    const pivot = Math.floor(Math.random() * this.size);
    const leftSize = this.left ? this.left.size : 0;
    if (pivot < leftSize) {
        return this.left.getRandom();
    } else if (pivot == leftSize) {
        return this.val;
    } else {
        return this.right.getRandom();
    }
}

TreeNode.prototype.insert = function (val) {
    if (val < this.val) {
        if (this.left) {
            this.left.insert(val);
        } else {
            this.left = new TreeNode(val);
        }
        this.size = this.size + 1;
        return true;
    } else if (this.val == val) {
        return false;
    } else {
        if (this.right) {
            this.right.insert(val);
        } else {
            this.right = new TreeNode(val);
        }
        this.size = this.size + 1;
        return true;
    }
}

var node = new TreeNode(15);
node.insert(8);
node.insert(4);
node.insert(12);
node.insert(11);

node.insert(22);
node.insert(19);
node.insert(16);
node.insert(20);
node.insert(28);    
node.insert(25);

function test() {
    var data = {};
    for (var i = 0; i < 10000; i++) {
        var val = node.getRandom();
        if (data[val] == null) {
            data[val] = 1;
        } else {
            data[val] = data[val] + 1;
        }
    }
    return data;
}

module.exports = {
    TreeNode: TreeNode,
    node: node,
    test: test
};