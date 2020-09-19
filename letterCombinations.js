function letterCombinations(digits) {
    const ans = [];
    if (digits == null || !digits.length) return ans;
    const mappings = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }

    function runner (ans, digits, mapping, curStr, idx) {
        if (digits.length == idx) {
            ans.push(curStr);
            return;
        }
        // console.log(idx)
        // if (!mapping[idx]) return;

        let str = mapping[digits[idx]];
        str.split('').forEach((digit) => {
            runner(ans, digits, mapping, curStr + digit, idx + 1, digit)
        })
    }
    runner(ans, digits, mappings, '', 0 );
    return ans;
}


console.log(letterCombinations('95485638272223'))
