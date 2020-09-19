var Root = require('./nodeObj.js').Root;

const myTranspose = matrix => (
    matrix[0].map((item, idx) => (
        matrix.map((row, i) => matrix[i][idx])
    ))
)

console.log(myTranspose([['a','b','c'], ['d','e','f'], ['g','h','i'], ['j', 'k', 'l']]));

const depth = (target, node) => {
    if (node.value == target) {
        return true
    }

    for (var i = 0; i < node.children.length; i++) {
        if (depth(target, node)) {
            return true;
        }
    }
    return false;
}

const bredth = (target, node) => {
    const stack = [node];

    while (stack.length) {
        const el = stack.shift();
        if (el.value == target) {
          return true;
        }
        [].push.apply(stack, el.children);
    }
    return false;
}

module.exports = {
  myTranspose,
  depth,
  bredth
}
