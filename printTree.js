const buildBST = require('./buildBST');

function printTree (root) {
    if (!root) return;
    const q = [[root, 0]];
    const e = [];
    let str = '';
    let lastLvl;
    while(q.length) {
        const level = q[0][1];
        const r = [];
        let flag = false;
        lastLvl = level;
        while(q.length && q[0][1] === level) {
            const [node, _] = q.shift();
            if (node && node.left) {
                q.push([node.left, level+1]);
            } else {
                q.push([null, level+1]);
            }
            if (node && node.right) {
                q.push([node.right, level+1]);
            } else {
                q.push([null, level+1]);
            }
            if (node) {
                flag = true;
                r.push(node.val);
            } else {
                r.push('.')
            }
        }
        if (flag === false) break;
        str += r.join(' ') + '\n';
        e.push(r);
    }
    const o = [];
    for(let i = 0; i < e.length; i++) {
        const oa = [];
        for(let j = 0; j < e[i].length; j++) {
            oa.push(' '.repeat(2**(lastLvl - i) / 2));
            oa.push(e[i][j]);
        }
        console.log(oa.join(''))
        o.push(oa);
    }
    // console.log(o)
    // return str;
    // return e;
}

module.exports = printTree;

// console.log(printTree(
//     buildBST([1,2,4,5,9,12,14,19])
//     // buildBST([2,5,12])
// ))