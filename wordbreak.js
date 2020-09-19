
    function wordBreak(sh, dict, memo = {}) {
        if (sh.length == 0) return [];

        if (memo.hasOwnProperty(sh)) {
            console.log('using memo')
            return memo[sh]
        }

        for (let i = 1; i < sh.length + 1; i++) {
            let word = sh.substring(0, i);
            if (dict.includes(word)) {
                const rest = sh.substring(i);
                const rec_call = wordBreak(rest, dict, memo);

                // memo[sh] = rec_call;
                console.log(memo)

                if (rec_call) {
                    let result = [word] + rec_call
                    memo[sh] = result;
                    return result;
                }
            }
        }
        memo[sh] = false;
        return false;
        // return false;
    }
console.log(wordBreak('leetcodeleetcode', ['a', 'leet', 'code', 'fff']))
