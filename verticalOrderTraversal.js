const Trees = require('./trees');

var verticalTraversal = function(root) {
    const verticals = {};
    let minX = 0;
    let maxX = 0;
    function traverse (node, x=0, y=0) {
        if (!node) return;
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x);
        if (verticals[x]) {
            verticals[x].push(node.val);
        } else {
            verticals[x] = [node.val];
        }
        verticals[x].sort((x,y)=>x-y);
        traverse(node.left, x-1, y-1);
        traverse(node.right, x+1, y-1);
    }
    traverse(root);
    const ans = Array(Math.abs(minX) + Math.abs(maxX)+1);
    for (let x in verticals) {
        
        ans[x - minX] = verticals[x];
    }
    return ans;
};

const t = Trees.deserialize('[1,2,3,4,5,6,7,8,9,10,11]');

console.log(verticalTraversal(t))