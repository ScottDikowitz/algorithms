class Tree{
    constructor(val, left, right) {
        this.val = val; this.left = left; this.right = right;
    }
}

function buildBST(arr) {
    function build(l,r) {
        if (l>r) return null;
        const mid = Math.floor(l + ((r-l) / 2));
        const val = arr[mid];
        const node = new Tree(val, build(l, mid-1), build(mid+1, r));
        return node;
    }
    return build(0,arr.length-1);
}

function bstSuccessor(root, target) {
    let node = root;
    let tn = null;
    let mp = null;
    while(node) {
        if (node.val === target) {
            tn = node;
            break;
        }
        if (target < node.val) {
            mp = node.val;
            node = node.left;
        } else {
            node = node.right;
        }
    }
    if (!tn) return -1;
    if (tn.right) {
        let p = tn.right;
        while(p.left) {
            p = p.left;
        }
        return p.val;
    }
    return mp;
}

function bstPredecessor(root, target) {
    let node = root;
    let tn = null;
    let mp = null;
    while(node) {
        if (node.val === target) {
            tn = node;
            break;
        }
        if (target < node.val) {
            node = node.left;
        } else {
            mp = node.val;
            node = node.right;
        }
    }
    if (!tn) return -1;
    if (tn.left) {
        let p = tn.left;
        while(p.right) {
            p = p.right;
        }
        return p.val;
    }
    return mp;
}


console.log(bstPredecessor(
    buildBST([1,2,4,5,9,12,14,19]), 12
))


console.log(bstSuccessor(
    buildBST([1,2,4,5,9,12,14,19]), 9
))