var generateParens = function(n) {

    function runner (n, curStr, numParensLeft, numParensRight, res) {
        if (curStr.length == n*2) {
            res.push(curStr);
            return;
        }
        if (numParensLeft < n) {
            runner(n, curStr + '(', numParensLeft + 1, numParensRight, res);
        }
        if (numParensRight < numParensLeft) {
            runner(n, curStr + ')', numParensLeft, numParensRight + 1, res);
        }
    }
    const res = [];
    runner(n, '', 0, 0, res);
    return res;
};

console.log(generateParens(5));
