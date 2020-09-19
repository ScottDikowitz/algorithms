function deleteParens (str) {
    let mismatchedLeft = 0;
    let mismatchedRight = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == '(') {
            mismatchedLeft++;
        } else if (str.charAt(i) == ')') {
            if (mismatchedLeft > 0) {
                mismatchedLeft--;
            } else {
                mismatchedRight++;
            }
        }
    }
    const set = new Set();
    function helper (leftRem, rightRem, lefts=0, idx=0, expression='') {
        if (idx == str.length) {
            if (leftRem == 0 && rightRem == 0 && lefts === 0) {
                set.add(expression);
            }
        } else {
            const char = str.charAt(idx);
            if (leftRem > 0 && char === '(') {
                helper(leftRem-1, rightRem, lefts, idx+1, expression);
            } else if (rightRem > 0 && char === ')') {
                helper(leftRem, rightRem-1, lefts, idx+1, expression);
            }

            if (char === '(') {
                helper(leftRem, rightRem, lefts+1, idx+1, expression + char);
            } else if (char === ')' && lefts > 0) {
                helper(leftRem, rightRem, lefts-1, idx+1, expression + char);
            } else {
                helper(leftRem, rightRem, lefts, idx+1, expression + char);
            }
        }
    }
    helper(mismatchedLeft, mismatchedRight);
    return Array.from(set);

}



const string = process.argv[2];

console.log(deleteParens(string || "(a)())()"));