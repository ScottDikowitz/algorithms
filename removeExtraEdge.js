/*
Given a binary tree, where an arbitary node has 2 parents i.e two nodes in the tree have the same child. Identify the defective node and remove an extra edge to fix the tree.

Example:

Input:
	   1
	  / \
	 2   3
	/ \ /
   4   5

Output:

     1			       1
    / \			      / \
   2   3    or	     2   3
  / \ 			    /   /
 4   5		       4   5

Explanation: We can remove either 3-5 or 2-5.
*/

const Trees = require('./trees');

function removeExtraEdge (root, seen=new Set()) {
   if (!root) return null;
   if (seen.has(root.val)) {
      return null;
   }
   seen.add(root.val);
   root.left = removeExtraEdge(root.left, seen);
   root.right = removeExtraEdge(root.right, seen);
   
   return root;
}

const t = Trees.deserialize('[1,2,4, null, null, 5, null, null, 3]');
const dupe = Trees.find(t, '5');
Trees.find(t, '3').left = dupe;
// console.log(dupe)

console.log(removeExtraEdge(t));