class Tree{
    constructor(val, left, right) {
        this.val = val; this.left = left; this.right = right;
    }
}

module.exports = function buildBST(arr) {
    function build(l,r) {
        if (l>r) return null;
        const mid = Math.floor(l + ((r-l) / 2));
        const val = arr[mid];
        const node = new Tree(val, build(l, mid-1), build(mid+1, r));
        return node;
    }
    return build(0,arr.length-1);
}