var wordBreak = function (s, wordDict) {
    wordDict = new Set(wordDict);
    const memo = new Map();
    const results = [];
    function recurse(start=0, validWords='') {
        let memoKey = start;
        if (memo.has(memoKey)) {
            return memo.get(memoKey);
        }
        const res = [];
        if (start >= s.length) {
            res.push('');
        }
        let recCall;
        for (let i = start; i < s.length; i++) {
            const word = s.substring(start, i+1);
            if (wordDict.has(word)) {

                recCall = recurse(i+1, validWords + word);
                recCall.forEach((str) => {
                    str = str ? ' ' + str : '';
                    res.push(word + str);
                });
            }
        }
        memo.set(start, res);
        return res;
    }
    return recurse();
}

module.exports = wordBreak;

// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// const string = process.argv[2] || "leetcode";
// const array = JSON.parse(process.argv[3]) || ["leet", "code"];
// Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// "apple pen apple"

const string = process.argv[2] || "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
const array = process.argv[3] && JSON.parse(process.argv[3]) || ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]


console.log(wordBreak(string, array));
