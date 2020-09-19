function TreeNode (val) {
	 this.val = val;
	 this.size = 1;
     this.left = null;
     this.right = null;
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

// Return tree depth in O(d) time.
function computeDepth(node) {
	let d = 0;
	while (node.left != null) {
		node = node.left;
		d++;
	}
	return d;
}

// Last level nodes are enumerated from 0 to 2**d - 1 (left -> right).
// Return True if last level node idx exists. 
// Binary search with O(d) complexity.
// function exists(idx, d, node) {
// 	let left = 0;
// 	let right = Math.pow(2, d) - 1;
// 	let pivot;
// 	for(let i = 0; i < d; i++) {
// 		// pivot = Math.floor(left + (right - left) / 2);
// 		pivot = Math.floor((left + right) / 2);
// 		if (idx <= pivot) {
// 		node = node.left;
// 		right = pivot;
// 		}
// 		else {
// 		node = node.right;
// 		left = pivot + 1;
// 		}
// 	}
// 	return node != null;
// }


function exists (i, d, root) {
	let right = Math.pow(2, d) - 1;
	let left = 0;
	while(d > 0) {
		const mid = Math.floor((left+right) / 2);
		if (i <= mid) {
			root = root.left;
			right = mid;
		} else {
			left = mid+1;
			root = root.right;
		}
		d--;
	}
	return root != null;
}

function countNodes(root) {
    // if the tree is empty
    if (root == null) return 0;

    let d = computeDepth(root);
    // if the tree contains 1 node
    if (d == 0) return 1;

    // Last level nodes are enumerated from 0 to 2**d - 1 (left -> right).
    // Perform binary search to check how many nodes exist.
	let left = 1;
	let right = Math.pow(2, d) - 1;
    let pivot;
    while (left != right) {
	//   pivot = Math.floor(left + (right - left) / 2);
	  pivot = Math.floor((left + right) / 2);
	  console.log(pivot)
      if (exists(pivot, d, root)) left = pivot + 1;
      else right = pivot - 1;
    }

    // The tree contains 2**d - 1 nodes on the first (d - 1) levels
    // and left or (left + 1) nodes on the last level.
    let result = Math.pow(2, d) - 1 + left;
    if (exists(left, d, root)) result++;
    return result;
}


var node = new TreeNode(15);
node.insert(15);
node.insert(7);
node.insert(22);
node.insert(4);
node.insert(10);
node.insert(19);
node.insert(25);
node.insert(3);
node.insert(6);    
node.insert(8);
node.insert(12);
node.insert(17);
node.insert(20); 
// node.insert(23);
// node.insert(28);
console.log(countNodes(node))