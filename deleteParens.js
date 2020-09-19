var removeInvalidParentheses = function(s) {
    let lefts = 0;
    let baseline = 0;
    let allowance = 0;
    // simple two pass scan to establish a baseline min bounds constraint
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) == ')') {
            ++lefts;
        }
    }
    for (let i = s.length - 1; i >= 0 && lefts > 0; i--) {
        if (s.charAt(i) == '(') {
            ++allowance;
            --lefts;
        } else if (s.charAt(i) == ')' && allowance > 0) {
            ++baseline;
            --allowance;
        }
    }
    function isValidParens(s) {
        let numOpens = 0;
        for (let i = 0; i < s.length; i++) {
            const char = s.charAt(i);
            if (char == '(') {
                numOpens++;
            } else if (char == ')') {
                if (numOpens > 0) {
                    numOpens--;
                } else {
                    return false;
                }
            }
        }
        return numOpens == 0;
    }

    function backtrack(curStr, maxRemovals, numRemovals=0, result=new Map()) {
        if (numRemovals > maxRemovals) {
            return false;
        }
        if (isValidParens(curStr)) {
            if (result.has(numRemovals)) {
                result.get(numRemovals).add(curStr);
            } else {
                let minkey = maxRemovals;
                result.forEach((_, key) => minkey = key < minkey ? key : minkey);
                if (numRemovals <= minkey) {
                    const set = new Set();
                    set.add(curStr);
                    result.set(numRemovals, set);
                }
            }
            // result.push(curStr);
            // valid solution; no need to reduce further
            return curStr;
        }
        for(let i = 0; i < curStr.length; i++) {
            // delete one char at a time and make rec call
            if (['(', ')'].includes(curStr.charAt(i))) {
              const delStr = curStr.substring(0, i) + curStr.substring(i+1);
              backtrack(delStr, maxRemovals, numRemovals + 1, result);
            }
        }
        const res = Array.from(result.values())[0];
        if (res) {
           return Array.from(Array.from(result.values())[0])
        }
    }
    return backtrack(s, baseline);
};

const parens = process.argv[2] || ')()';
console.log(removeInvalidParentheses(parens))
